"use client";

import { useCallback, useMemo, useState } from "react";
import { Check, CircleDot, Dribbble, RotateCcw, Trophy } from "lucide-react";
import {
  getDailyBaseballTrivia,
  getDailyBasketballTrivia,
  type TriviaQuestion,
} from "@/lib/trivia-data";

type AnswerState = {
  selected: string | null;
  submitted: boolean;
};

const EMPTY: AnswerState = { selected: null, submitted: false };

function TriviaCard({
  trivia,
  icon,
  label,
}: {
  trivia: TriviaQuestion;
  icon: React.ReactNode;
  label: string;
}) {
  const [answer, setAnswer] = useState<AnswerState>(EMPTY);

  const isCorrect = useMemo(() => {
    if (!answer.submitted || !answer.selected) return null;
    return answer.selected === trivia.correct_answer;
  }, [answer, trivia.correct_answer]);

  const handleSubmit = useCallback(() => {
    if (!answer.selected || answer.submitted) return;
    setAnswer((prev) => ({ ...prev, submitted: true }));
  }, [answer]);

  const handleReset = useCallback(() => {
    setAnswer(EMPTY);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        {icon}
        <span className="text-[13px] font-semibold text-[var(--foreground)]">
          {label}
        </span>
      </div>

      <div className="px-4 py-4">
        <p className="mb-4 text-[14px] leading-relaxed text-[var(--foreground)]">
          {trivia.question}
        </p>

        <div className="space-y-2">
          {Object.entries(trivia.options).map(([key, text]) => {
            const isSelected = answer.selected === key;
            const isCorrectOption = key === trivia.correct_answer;
            const showFeedback = answer.submitted;

            let optionClass =
              "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/[0.02]";

            if (isSelected && !showFeedback) {
              optionClass =
                "border-[var(--primary)] bg-[var(--primary)]/[0.06] text-[var(--foreground)] ring-1 ring-[var(--primary)]/20";
            } else if (showFeedback && isCorrectOption) {
              optionClass =
                "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/20 dark:text-green-300 dark:border-green-700";
            } else if (showFeedback && isSelected && !isCorrectOption) {
              optionClass =
                "border-red-400 bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-300 dark:border-red-700";
            }

            return (
              <button
                key={key}
                disabled={answer.submitted}
                onClick={() => setAnswer({ selected: key, submitted: false })}
                className={`flex w-full items-start gap-2.5 rounded-lg border px-3 py-2 text-left text-[13px] transition-all ${optionClass}`}
              >
                <span
                  className={`mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    isSelected && !showFeedback
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : showFeedback && isCorrectOption
                        ? "border-green-500 bg-green-500 text-white"
                        : showFeedback && isSelected && !isCorrectOption
                          ? "border-red-400 bg-red-400 text-white"
                          : "border-[var(--border)] text-[var(--muted-foreground)]"
                  }`}
                >
                  {showFeedback && isCorrectOption ? (
                    <Check size={11} />
                  ) : (
                    key
                  )}
                </span>
                <span className="leading-relaxed">{text}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {!answer.submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!answer.selected}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3 py-1.5 text-[12px] font-medium text-white transition-opacity disabled:opacity-30"
            >
              <Check size={13} />
              Submit Answer
            </button>
          ) : (
            <>
              {isCorrect !== null && (
                <span
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                    isCorrect
                      ? "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Incorrect"}
                </span>
              )}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 rounded-lg bg-[var(--muted)] px-2.5 py-1.5 text-[12px] font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                <RotateCcw size={11} />
                Retry
              </button>
            </>
          )}
        </div>

        {answer.submitted && trivia.explanation && (
          <div className="mt-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Explanation
            </div>
            <p className="text-[13px] leading-relaxed text-[var(--muted-foreground)]">
              {trivia.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DailyTriviaPage() {
  const baseball = useMemo(() => getDailyBaseballTrivia(), []);
  const basketball = useMemo(() => getDailyBasketballTrivia(), []);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="mx-auto w-full max-w-2xl px-4 py-8">
        <div className="mb-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Trophy size={20} className="text-amber-500" />
            <h1 className="text-xl font-bold text-[var(--foreground)]">
              Daily Trivia
            </h1>
          </div>
          <p className="text-[13px] text-[var(--muted-foreground)]">{today}</p>
        </div>

        <div className="space-y-6">
          <TriviaCard
            trivia={baseball}
            icon={<CircleDot size={16} className="text-red-500" />}
            label="Baseball Trivia"
          />
          <TriviaCard
            trivia={basketball}
            icon={<Dribbble size={16} className="text-orange-500" />}
            label="Basketball Trivia"
          />
        </div>
      </div>
    </div>
  );
}
