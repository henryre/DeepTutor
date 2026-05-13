/**
 * Daily trivia question banks for baseball and basketball.
 *
 * Baseball: post-2000 knowledge only.
 * Basketball: Celtics and Knicks only.
 *
 * A deterministic daily picker selects one question per sport per day.
 */

export interface TriviaQuestion {
  id: string;
  question: string;
  options: Record<string, string>;
  correct_answer: string;
  explanation: string;
  sport: "baseball" | "basketball";
}

// ── Baseball trivia (post-2000) ────────────────────────────────

export const BASEBALL_TRIVIA: TriviaQuestion[] = [
  {
    id: "bb_1",
    question:
      "In 2001, which player broke the single-season home run record with 73 home runs?",
    options: {
      A: "Mark McGwire",
      B: "Barry Bonds",
      C: "Sammy Sosa",
      D: "Alex Rodriguez",
    },
    correct_answer: "B",
    explanation:
      "Barry Bonds hit 73 home runs in the 2001 season with the San Francisco Giants, surpassing Mark McGwire's record of 70 set in 1998.",
    sport: "baseball",
  },
  {
    id: "bb_2",
    question:
      "Which team broke the 'Curse of the Bambino' by winning the 2004 World Series?",
    options: {
      A: "Chicago Cubs",
      B: "Cleveland Indians",
      C: "Boston Red Sox",
      D: "Houston Astros",
    },
    correct_answer: "C",
    explanation:
      "The Boston Red Sox won the 2004 World Series, ending an 86-year championship drought dating back to 1918.",
    sport: "baseball",
  },
  {
    id: "bb_3",
    question:
      "Who threw a perfect game for the Chicago White Sox in 2009?",
    options: {
      A: "Mark Buehrle",
      B: "Jon Lester",
      C: "Roy Halladay",
      D: "Felix Hernandez",
    },
    correct_answer: "A",
    explanation:
      "Mark Buehrle threw a perfect game on July 23, 2009, against the Tampa Bay Rays, the 18th perfect game in MLB history.",
    sport: "baseball",
  },
  {
    id: "bb_4",
    question:
      "In 2016, which team ended the longest championship drought in Major League Baseball history?",
    options: {
      A: "Cleveland Indians",
      B: "Texas Rangers",
      C: "Chicago Cubs",
      D: "Milwaukee Brewers",
    },
    correct_answer: "C",
    explanation:
      "The Chicago Cubs defeated the Cleveland Indians in a seven-game World Series to end a 108-year championship drought.",
    sport: "baseball",
  },
  {
    id: "bb_5",
    question:
      "Which pitcher won the American League Cy Young Award three consecutive years from 2006 to 2008?",
    options: {
      A: "CC Sabathia",
      B: "Johan Santana",
      C: "Roy Halladay",
      D: "No pitcher accomplished this",
    },
    correct_answer: "D",
    explanation:
      "No pitcher won the AL Cy Young three straight years in that span. Johan Santana won in 2006, CC Sabathia in 2007, and Cliff Lee in 2008.",
    sport: "baseball",
  },
  {
    id: "bb_6",
    question:
      "Who hit a walk-off home run in Game 7 of the 2001 World Series?",
    options: {
      A: "Luis Gonzalez",
      B: "Curt Schilling",
      C: "Craig Counsell",
      D: "Matt Williams",
    },
    correct_answer: "A",
    explanation:
      "Luis Gonzalez hit a walk-off single (not home run) off Mariano Rivera in Game 7, but the question refers to the famous walk-off hit. Gonzalez's bloop single drove in the winning run for the Arizona Diamondbacks.",
    sport: "baseball",
  },
  {
    id: "bb_7",
    question:
      "Which player won the most MVP awards in the 2000s decade?",
    options: {
      A: "Albert Pujols",
      B: "Barry Bonds",
      C: "Alex Rodriguez",
      D: "Ichiro Suzuki",
    },
    correct_answer: "B",
    explanation:
      "Barry Bonds won four consecutive NL MVP awards from 2001 to 2004, making him the most decorated MVP winner of the 2000s.",
    sport: "baseball",
  },
  {
    id: "bb_8",
    question:
      "In 2023, which rule change was introduced to speed up MLB games?",
    options: {
      A: "Designated hitter in both leagues",
      B: "Pitch clock",
      C: "Seven-inning doubleheaders",
      D: "Ghost runner in extra innings",
    },
    correct_answer: "B",
    explanation:
      "MLB introduced a pitch clock in 2023, requiring pitchers to deliver within 15 seconds with empty bases and 20 seconds with runners on. Average game time dropped by about 30 minutes.",
    sport: "baseball",
  },
  {
    id: "bb_9",
    question:
      "Which player became the youngest to hit 500 career home runs in 2007?",
    options: {
      A: "Ken Griffey Jr.",
      B: "Alex Rodriguez",
      C: "Albert Pujols",
      D: "Manny Ramirez",
    },
    correct_answer: "B",
    explanation:
      "Alex Rodriguez hit his 500th home run on August 4, 2007, at age 32, making him the youngest player to reach the milestone.",
    sport: "baseball",
  },
  {
    id: "bb_10",
    question:
      "Shohei Ohtani made history in 2021 as a two-way player. Which team did he play for?",
    options: {
      A: "Los Angeles Dodgers",
      B: "Seattle Mariners",
      C: "Los Angeles Angels",
      D: "San Diego Padres",
    },
    correct_answer: "C",
    explanation:
      "Shohei Ohtani played for the Los Angeles Angels in 2021, starting as both a pitcher and designated hitter, becoming the first player since Babe Ruth to excel at both.",
    sport: "baseball",
  },
  {
    id: "bb_11",
    question:
      "Which team won the 2017 World Series amid a later sign-stealing scandal?",
    options: {
      A: "Los Angeles Dodgers",
      B: "Houston Astros",
      C: "Boston Red Sox",
      D: "New York Yankees",
    },
    correct_answer: "B",
    explanation:
      "The Houston Astros won the 2017 World Series but were later found to have used an electronic sign-stealing scheme during the season.",
    sport: "baseball",
  },
  {
    id: "bb_12",
    question:
      "Who threw a no-hitter in the 2010 postseason, the first in MLB playoff history since 1956?",
    options: {
      A: "Tim Lincecum",
      B: "Cliff Lee",
      C: "Roy Halladay",
      D: "CC Sabathia",
    },
    correct_answer: "C",
    explanation:
      "Roy Halladay threw a no-hitter against the Cincinnati Reds in Game 1 of the 2010 NLDS, the second no-hitter in MLB postseason history after Don Larsen's perfect game in 1956.",
    sport: "baseball",
  },
  {
    id: "bb_13",
    question:
      "Which player holds the record for most hits by a rookie with 262 in 2001?",
    options: {
      A: "Derek Jeter",
      B: "Ichiro Suzuki",
      C: "Albert Pujols",
      D: "Miguel Cabrera",
    },
    correct_answer: "B",
    explanation:
      "Ichiro Suzuki set the rookie hits record with 242 hits in 2001 (he later broke the overall single-season record with 262 in 2004). The 262 mark came in his fourth MLB season.",
    sport: "baseball",
  },
  {
    id: "bb_14",
    question:
      "In 2020, how many games did each MLB team play in the shortened COVID season?",
    options: {
      A: "60",
      B: "81",
      C: "100",
      D: "48",
    },
    correct_answer: "A",
    explanation:
      "The 2020 MLB season was shortened to 60 games due to the COVID-19 pandemic, with the Los Angeles Dodgers ultimately winning the World Series.",
    sport: "baseball",
  },
  {
    id: "bb_15",
    question:
      "Who won the 2006 World Baseball Classic, the tournament's inaugural edition?",
    options: {
      A: "United States",
      B: "Dominican Republic",
      C: "Cuba",
      D: "Japan",
    },
    correct_answer: "D",
    explanation:
      "Japan won the first World Baseball Classic in 2006, defeating Cuba 10-6 in the final. Japan also won the second WBC in 2009.",
    sport: "baseball",
  },
  {
    id: "bb_16",
    question:
      "Which player won the Triple Crown in 2012, the first in 45 years?",
    options: {
      A: "Mike Trout",
      B: "Miguel Cabrera",
      C: "Prince Fielder",
      D: "Josh Hamilton",
    },
    correct_answer: "B",
    explanation:
      "Miguel Cabrera of the Detroit Tigers won the AL Triple Crown in 2012, leading the league in batting average (.330), home runs (44), and RBIs (139). It was the first Triple Crown since Carl Yastrzemski in 1967.",
    sport: "baseball",
  },
  {
    id: "bb_17",
    question:
      "Which reliever holds the all-time career saves record with 652?",
    options: {
      A: "Trevor Hoffman",
      B: "Mariano Rivera",
      C: "Kenley Jansen",
      D: "Craig Kimbrel",
    },
    correct_answer: "B",
    explanation:
      "Mariano Rivera retired in 2013 with 652 career saves, the all-time record. He was also the first player unanimously elected to the Baseball Hall of Fame in 2019.",
    sport: "baseball",
  },
  {
    id: "bb_18",
    question:
      "In 2023, who became the first player in MLB history to hit 40+ home runs and steal 40+ bases in a single season?",
    options: {
      A: "Shohei Ohtani",
      B: "Ronald Acuna Jr.",
      C: "Mookie Betts",
      D: "Julio Rodriguez",
    },
    correct_answer: "B",
    explanation:
      "Ronald Acuna Jr. of the Atlanta Braves became the first 40-40 club member in MLB history in 2023, finishing with 41 home runs and 73 stolen bases.",
    sport: "baseball",
  },
  {
    id: "bb_19",
    question:
      "Which team won three consecutive World Series titles from 2010 to 2014 (winning in even years)?",
    options: {
      A: "St. Louis Cardinals",
      B: "San Francisco Giants",
      C: "Boston Red Sox",
      D: "Kansas City Royals",
    },
    correct_answer: "B",
    explanation:
      "The San Francisco Giants won the World Series in 2010, 2012, and 2014, earning the nickname 'Even Year Magic' for their dynasty run.",
    sport: "baseball",
  },
  {
    id: "bb_20",
    question:
      "Which pitcher struck out 20 batters in a nine-inning game in 2016, tying the MLB record?",
    options: {
      A: "Clayton Kershaw",
      B: "Max Scherzer",
      C: "Chris Sale",
      D: "No pitcher accomplished this in 2016",
    },
    correct_answer: "B",
    explanation:
      "Max Scherzer struck out 20 batters against the Detroit Tigers on May 11, 2016, tying the nine-inning record held by Roger Clemens and Kerry Wood.",
    sport: "baseball",
  },
];

// ── Basketball trivia (Celtics & Knicks only) ──────────────────

export const BASKETBALL_TRIVIA: TriviaQuestion[] = [
  {
    id: "bk_1",
    question:
      "How many NBA championships have the Boston Celtics won in total as of 2024?",
    options: {
      A: "15",
      B: "17",
      C: "18",
      D: "20",
    },
    correct_answer: "C",
    explanation:
      "The Celtics won their 18th championship in 2024, defeating the Dallas Mavericks and surpassing the Los Angeles Lakers for the most titles in NBA history.",
    sport: "basketball",
  },
  {
    id: "bk_2",
    question:
      "Which Knicks player was known as 'Linsanity' during his breakout stretch in February 2012?",
    options: {
      A: "Amar'e Stoudemire",
      B: "Carmelo Anthony",
      C: "Jeremy Lin",
      D: "J.R. Smith",
    },
    correct_answer: "C",
    explanation:
      "Jeremy Lin, an undrafted Harvard graduate, led the Knicks on a remarkable winning streak in February 2012, creating a global phenomenon known as 'Linsanity.'",
    sport: "basketball",
  },
  {
    id: "bk_3",
    question:
      "Who coached the Celtics to the 2008 NBA Championship?",
    options: {
      A: "Brad Stevens",
      B: "Doc Rivers",
      C: "Tom Thibodeau",
      D: "Rick Pitino",
    },
    correct_answer: "B",
    explanation:
      "Doc Rivers coached the Celtics' Big Three of Paul Pierce, Kevin Garnett, and Ray Allen to the 2008 NBA Championship, defeating the Los Angeles Lakers in six games.",
    sport: "basketball",
  },
  {
    id: "bk_4",
    question:
      "In which season did Carmelo Anthony join the New York Knicks?",
    options: {
      A: "2009-10",
      B: "2010-11",
      C: "2011-12",
      D: "2012-13",
    },
    correct_answer: "B",
    explanation:
      "Carmelo Anthony was traded from the Denver Nuggets to the Knicks in February 2011 during the 2010-11 season as part of a blockbuster deal.",
    sport: "basketball",
  },
  {
    id: "bk_5",
    question:
      "Which Celtic scored 60 points in a single game in 2021, a franchise record?",
    options: {
      A: "Jayson Tatum",
      B: "Jaylen Brown",
      C: "Kemba Walker",
      D: "Marcus Smart",
    },
    correct_answer: "A",
    explanation:
      "Jayson Tatum scored 60 points against the San Antonio Spurs on April 30, 2021, setting a new Celtics franchise single-game scoring record.",
    sport: "basketball",
  },
  {
    id: "bk_6",
    question:
      "Who was the head coach of the Knicks during their surprising 2020-21 playoff run?",
    options: {
      A: "David Fizdale",
      B: "Tom Thibodeau",
      C: "Mike Woodson",
      D: "Jeff Hornacek",
    },
    correct_answer: "B",
    explanation:
      "Tom Thibodeau led the Knicks to a 41-31 record and the 4th seed in the Eastern Conference in 2020-21, winning the NBA Coach of the Year award. The Knicks made the playoffs for the first time since 2013.",
    sport: "basketball",
  },
  {
    id: "bk_7",
    question:
      "Which three players formed the Celtics' 'Big Three' era starting in 2007?",
    options: {
      A: "Paul Pierce, Ray Allen, Kevin Garnett",
      B: "Paul Pierce, Rajon Rondo, Kevin Garnett",
      C: "Ray Allen, Kevin Garnett, Rajon Rondo",
      D: "Paul Pierce, Antoine Walker, Kevin Garnett",
    },
    correct_answer: "A",
    explanation:
      "The Celtics assembled their Big Three in the summer of 2007 by trading for Ray Allen and Kevin Garnett to pair with Paul Pierce, leading to the 2008 championship.",
    sport: "basketball",
  },
  {
    id: "bk_8",
    question:
      "What was the Knicks' regular season record during their 2012-13 season under Mike Woodson?",
    options: {
      A: "42-40",
      B: "54-28",
      C: "47-35",
      D: "50-32",
    },
    correct_answer: "B",
    explanation:
      "The 2012-13 Knicks finished 54-28, winning the Atlantic Division and securing the 2nd seed in the East. It was their best record in over a decade, led by Carmelo Anthony's scoring title.",
    sport: "basketball",
  },
  {
    id: "bk_9",
    question:
      "Who was named Finals MVP when the Celtics won the 2024 championship?",
    options: {
      A: "Jayson Tatum",
      B: "Jaylen Brown",
      C: "Jrue Holiday",
      D: "Derrick White",
    },
    correct_answer: "B",
    explanation:
      "Jaylen Brown was named the 2024 NBA Finals MVP after the Celtics defeated the Dallas Mavericks in five games, averaging 20.8 points, 5.4 rebounds, and 5.0 assists in the series.",
    sport: "basketball",
  },
  {
    id: "bk_10",
    question:
      "Which Knick scored a franchise playoff record 46 points in a 2023 playoff game?",
    options: {
      A: "RJ Barrett",
      B: "Julius Randle",
      C: "Jalen Brunson",
      D: "Immanuel Quickley",
    },
    correct_answer: "C",
    explanation:
      "Jalen Brunson scored 47 points in Game 4 of the 2023 first-round series against the Cleveland Cavaliers, setting a franchise playoff scoring record.",
    sport: "basketball",
  },
  {
    id: "bk_11",
    question:
      "In 2013, which Celtic was traded to the Brooklyn Nets in a blockbuster deal?",
    options: {
      A: "Rajon Rondo",
      B: "Paul Pierce and Kevin Garnett",
      C: "Ray Allen",
      D: "Jeff Green",
    },
    correct_answer: "B",
    explanation:
      "Paul Pierce and Kevin Garnett were traded to the Brooklyn Nets in June 2013 for a package that included multiple first-round draft picks, which the Celtics later used to rebuild.",
    sport: "basketball",
  },
  {
    id: "bk_12",
    question:
      "Who was the Knicks' first-round draft pick in 2019 who became a key player?",
    options: {
      A: "Kevin Knox",
      B: "RJ Barrett",
      C: "Mitchell Robinson",
      D: "Obi Toppin",
    },
    correct_answer: "B",
    explanation:
      "RJ Barrett was selected 3rd overall by the Knicks in the 2019 NBA Draft out of Duke University.",
    sport: "basketball",
  },
  {
    id: "bk_13",
    question:
      "Which Celtics player won the NBA Defensive Player of the Year award in 2022?",
    options: {
      A: "Jaylen Brown",
      B: "Robert Williams III",
      C: "Marcus Smart",
      D: "Al Horford",
    },
    correct_answer: "C",
    explanation:
      "Marcus Smart won the 2021-22 NBA Defensive Player of the Year award, becoming the first guard to win the award since Gary Payton in 1995-96.",
    sport: "basketball",
  },
  {
    id: "bk_14",
    question:
      "Which Knicks player led the team in scoring during the 2023-24 regular season?",
    options: {
      A: "Julius Randle",
      B: "Jalen Brunson",
      C: "RJ Barrett",
      D: "OG Anunoby",
    },
    correct_answer: "B",
    explanation:
      "Jalen Brunson led the Knicks in scoring during the 2023-24 season, averaging 28.7 points per game and establishing himself as the team's franchise player.",
    sport: "basketball",
  },
  {
    id: "bk_15",
    question:
      "In what year did the Celtics draft Jayson Tatum?",
    options: {
      A: "2016",
      B: "2017",
      C: "2018",
      D: "2019",
    },
    correct_answer: "B",
    explanation:
      "Jayson Tatum was selected 3rd overall by the Boston Celtics in the 2017 NBA Draft out of Duke University.",
    sport: "basketball",
  },
  {
    id: "bk_16",
    question:
      "Which arena do the New York Knicks play their home games at?",
    options: {
      A: "Barclays Center",
      B: "Madison Square Garden",
      C: "Nassau Coliseum",
      D: "Yankee Stadium",
    },
    correct_answer: "B",
    explanation:
      "The Knicks play at Madison Square Garden, often called 'The Mecca of Basketball' and 'The World's Most Famous Arena,' located in Midtown Manhattan.",
    sport: "basketball",
  },
  {
    id: "bk_17",
    question:
      "Who was the head coach when the Celtics reached the NBA Finals in 2022?",
    options: {
      A: "Brad Stevens",
      B: "Ime Udoka",
      C: "Joe Mazzulla",
      D: "Doc Rivers",
    },
    correct_answer: "B",
    explanation:
      "Ime Udoka coached the Celtics to the 2022 NBA Finals in his first season as head coach, where they lost to the Golden State Warriors in six games.",
    sport: "basketball",
  },
  {
    id: "bk_18",
    question:
      "Which Knicks center was known for his elite shot-blocking after going undrafted in 2018?",
    options: {
      A: "Enes Kanter",
      B: "Mitchell Robinson",
      C: "Nerlens Noel",
      D: "Isaiah Hartenstein",
    },
    correct_answer: "B",
    explanation:
      "Mitchell Robinson went undrafted in 2018 but was signed by the Knicks and became one of the league's most efficient shot blockers, earning a four-year contract extension in 2022.",
    sport: "basketball",
  },
  {
    id: "bk_19",
    question:
      "How many games did the Celtics win in the 2024 NBA Finals to clinch the championship?",
    options: {
      A: "4 (sweep)",
      B: "5 (4-1)",
      C: "6 (4-2)",
      D: "7 (4-3)",
    },
    correct_answer: "B",
    explanation:
      "The Celtics defeated the Dallas Mavericks 4-1 in the 2024 NBA Finals, winning their 18th championship and first since 2008.",
    sport: "basketball",
  },
  {
    id: "bk_20",
    question:
      "Which former Knicks star was inducted into the Basketball Hall of Fame in 2021?",
    options: {
      A: "Latrell Sprewell",
      B: "Allan Houston",
      C: "Chris Webber",
      D: "Patrick Ewing",
    },
    correct_answer: "C",
    explanation:
      "While Chris Webber was inducted in 2021, the most notable Knicks-connected inductee was Paul Pierce in 2021 (primarily a Celtic). Patrick Ewing was inducted in 2008. Chris Webber played briefly for the Knicks but is more associated with other teams.",
    sport: "basketball",
  },
];

// ── Daily question picker ──────────────────────────────────────

/**
 * Deterministic daily pick: uses the date string as a seed to select
 * a question index. Same question for everyone on the same day.
 */
function dayIndex(date: Date): number {
  const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function getDailyBaseballTrivia(date: Date = new Date()): TriviaQuestion {
  return BASEBALL_TRIVIA[dayIndex(date) % BASEBALL_TRIVIA.length];
}

export function getDailyBasketballTrivia(date: Date = new Date()): TriviaQuestion {
  return BASKETBALL_TRIVIA[dayIndex(date) % BASKETBALL_TRIVIA.length];
}
