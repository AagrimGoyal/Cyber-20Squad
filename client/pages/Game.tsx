import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Dice6, Coins, Shield, AlertCircle, RotateCcw } from "lucide-react";

interface Player {
  id: string;
  name: string;
  position: number;
  money: number;
  savings: number;
  shields: number;
}

interface GameEvent {
  type: "salary" | "spend" | "save" | "cyber_event" | "shield_bonus";
  description: string;
}

export default function Game() {
  const { toast } = useToast();
  const [gameStarted, setGameStarted] = useState(false);
  const [playerNames, setPlayerNames] = useState(["", "", "", ""]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [lastEvent, setLastEvent] = useState<GameEvent | null>(null);
  const [gameRounds, setGameRounds] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const BOARD_LENGTH = 16;
  const INITIAL_MONEY = 2000;
  const START_ROUND = 0;

  const cyberRiskCards = [
    { description: "Phishing scam: Lose ₹1000 if you clicked the link", loss: 1000 },
    { description: "Shared OTP online: Lose ₹500 and skip next turn", loss: 500 },
    { description: "Downloaded unsafe app: Pay ₹500 fine", loss: 500 },
    { description: "Weak password hacked: Lose ₹800", loss: 800 },
    { description: "Clicked malware link: Lose ₹1200", loss: 1200 },
  ];

  const shieldCards = [
    "Strong passwords protect against scams",
    "Password Manager secures all accounts",
    "2FA Shield prevents unauthorized access",
    "App review check prevents app fraud",
    "Email verification beats phishing",
  ];

  const boardSpaces = [
    "START",
    "SALARY",
    "SPEND",
    "SAVE",
    "CYBER EVENT",
    "SALARY",
    "SPEND",
    "SHIELD BONUS",
    "SAVE",
    "CYBER EVENT",
    "SALARY",
    "SPEND",
    "SAVE",
    "CYBER EVENT",
    "SALARY",
    "FINISH",
  ];

  function initializeGame() {
    const numPlayers = playerNames.filter((n) => n.trim()).length;
    if (numPlayers < 2) {
      toast({ title: "Add at least 2 players" });
      return;
    }

    const newPlayers = playerNames
      .filter((n) => n.trim())
      .map((name, idx) => ({
        id: `p${idx}`,
        name,
        position: 0,
        money: INITIAL_MONEY,
        savings: 0,
        shields: 0,
      }));

    setPlayers(newPlayers);
    setCurrentPlayerIdx(0);
    setGameStarted(true);
    setGameRounds(0);
    setGameOver(false);
    toast({ title: "Game started!", description: `${newPlayers[0].name} goes first.` });
  }

  function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);

    const currentPlayer = players[currentPlayerIdx];
    let newPosition = currentPlayer.position + result;
    let eventType: GameEvent["type"] = "salary";
    let description = "";

    if (newPosition >= BOARD_LENGTH) {
      newPosition = BOARD_LENGTH - 1;
      setGameRounds((r) => r + 1);
      if (gameRounds >= 1) {
        setGameOver(true);
        toast({ title: "Game Over! Calculating scores..." });
        return;
      }
    }

    const space = boardSpaces[newPosition];

    const updatedPlayers = [...players];
    const updatedPlayer = { ...updatedPlayers[currentPlayerIdx] };

    updatedPlayer.position = newPosition;

    switch (space) {
      case "SALARY":
        updatedPlayer.money += 1000;
        eventType = "salary";
        description = "💼 You earned ₹1000 salary!";
        break;

      case "SPEND":
        updatedPlayer.money = Math.max(0, updatedPlayer.money - 500);
        eventType = "spend";
        description = "💸 You spent ₹500 on necessities.";
        break;

      case "SAVE":
        const saveAmount = Math.min(500, updatedPlayer.money);
        updatedPlayer.money -= saveAmount;
        updatedPlayer.savings += saveAmount;
        eventType = "save";
        description = `💰 You saved ₹${saveAmount}.`;
        break;

      case "CYBER EVENT": {
        const card = cyberRiskCards[Math.floor(Math.random() * cyberRiskCards.length)];
        if (updatedPlayer.shields > 0) {
          updatedPlayer.shields -= 1;
          eventType = "cyber_event";
          description = `🛡️ Cyber Event blocked! ${card.description.split(":")[0]} (Shield used)`;
        } else {
          updatedPlayer.money = Math.max(0, updatedPlayer.money - card.loss);
          eventType = "cyber_event";
          description = `⚠️ ${card.description}`;
        }
        break;
      }

      case "SHIELD BONUS":
        updatedPlayer.shields += 1;
        eventType = "shield_bonus";
        description = "🛡️ You earned a Cyber Shield!";
        break;
    }

    updatedPlayers[currentPlayerIdx] = updatedPlayer;
    setPlayers(updatedPlayers);
    setLastEvent({ type: eventType, description });
  }

  function nextTurn() {
    setDiceResult(null);
    setLastEvent(null);
    setCurrentPlayerIdx((prev) => (prev + 1) % players.length);
  }

  function calculateScore(player: Player): number {
    return player.money + player.savings + player.shields * 200;
  }

  function restartGame() {
    setGameStarted(false);
    setPlayerNames(["", "", "", ""]);
    setPlayers([]);
    setCurrentPlayerIdx(0);
    setDiceResult(null);
    setLastEvent(null);
    setGameRounds(0);
    setGameOver(false);
  }

  if (!gameStarted) {
    return (
      <Layout>
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 min-h-[70vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    🎲 Cyber Budgeting Board Game
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-cyber-blue/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Game Objective</h3>
                    <p className="text-sm text-muted-foreground">
                      Become the smartest digital citizen by saving money, avoiding scams, and collecting Cyber Shields!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Enter Player Names (2-6 players)</h3>
                    <div className="space-y-2">
                      {playerNames.map((_, idx) => (
                        <Input
                          key={idx}
                          value={playerNames[idx]}
                          onChange={(e) => {
                            const newNames = [...playerNames];
                            newNames[idx] = e.target.value;
                            setPlayerNames(newNames);
                          }}
                          placeholder={`Player ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-sm">
                    <p className="font-semibold mb-2">How to Play:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Start with ₹2000 and play for 2 rounds</li>
                      <li>Roll dice and move around the board</li>
                      <li>Land on spaces: SALARY (+₹1000), SPEND (-₹500), SAVE, CYBER EVENT, or SHIELD BONUS</li>
                      <li>Use Cyber Shields to block Cyber Events</li>
                      <li>Win by having the highest total score (money + savings + shields)</li>
                    </ul>
                  </div>

                  <Button onClick={initializeGame} size="lg" className="w-full bg-cyber-green text-white hover:bg-cyber-green/90">
                    Start Game
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (gameOver) {
    const scores = players.map((p) => ({
      ...p,
      score: calculateScore(p),
    }));
    const winner = scores.reduce((max, p) => (p.score > max.score ? p : max));

    return (
      <Layout>
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 min-h-[70vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">🏆 Game Over!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-cyber-green/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyber-green">🎉 {winner.name}</div>
                    <div className="text-lg text-muted-foreground">Wins with ₹{winner.score} total score!</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Final Scores</h3>
                    {scores.sort((a, b) => b.score - a.score).map((p, idx) => (
                      <div key={p.id} className="flex justify-between p-3 bg-muted rounded-lg">
                        <div className="font-medium">
                          {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "  "} {p.name}
                        </div>
                        <div className="text-right">
                          <div className="text-sm">💰 ₹{p.money} | 🏦 ₹{p.savings} | 🛡️ {p.shields}</div>
                          <div className="font-semibold text-cyber-blue">Total: ₹{p.score}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button onClick={restartGame} size="lg" className="w-full bg-cyber-blue text-white hover:bg-cyber-blue/90">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Play Again
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const currentPlayer = players[currentPlayerIdx];

  return (
    <Layout>
      <section className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 min-h-[90vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">🎲 Game Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Current Player</div>
                    <div className="text-2xl font-bold">{currentPlayer.name}</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {boardSpaces.map((space, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg text-xs font-semibold text-center ${
                          currentPlayer.position === idx ? "bg-cyber-green text-white ring-2 ring-cyber-green" : "bg-card border border-border"
                        }`}
                      >
                        <div className="mb-1">
                          {space === "START" && "🚀"}
                          {space === "SALARY" && "💼"}
                          {space === "SPEND" && "💸"}
                          {space === "SAVE" && "💰"}
                          {space === "CYBER EVENT" && "⚠️"}
                          {space === "SHIELD BONUS" && "🛡️"}
                          {space === "FINISH" && "🏁"}
                        </div>
                        {space}
                      </div>
                    ))}
                  </div>

                  {lastEvent && (
                    <div className={`p-4 rounded-lg mb-4 ${
                      lastEvent.type === "cyber_event"
                        ? "bg-red-50 dark:bg-red-900/20 border border-red-200"
                        : lastEvent.type === "salary"
                          ? "bg-green-50 dark:bg-green-900/20 border border-green-200"
                          : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200"
                    }`}>
                      <div className="font-semibold">{lastEvent.description}</div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {diceResult === null ? (
                      <Button onClick={rollDice} size="lg" className="flex-1 bg-cyber-blue text-white">
                        <Dice6 className="h-5 w-5 mr-2" />
                        Roll Dice
                      </Button>
                    ) : (
                      <>
                        <div className="flex-1 p-3 bg-muted rounded-lg text-center">
                          <div className="text-sm text-muted-foreground">Dice Result</div>
                          <div className="text-3xl font-bold">{diceResult}</div>
                        </div>
                        <Button onClick={nextTurn} size="lg" className="flex-1 bg-cyber-green text-white">
                          Next Turn →
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Players Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {players.map((p, idx) => (
                    <div key={p.id} className={`p-3 rounded-lg border ${idx === currentPlayerIdx ? "bg-cyber-green/10 border-cyber-green" : "bg-muted border-border"}`}>
                      <div className="font-semibold text-sm mb-2">{p.name}</div>
                      <div className="text-xs space-y-1 text-muted-foreground">
                        <div>💵 Money: ₹{p.money}</div>
                        <div>🏦 Savings: ₹{p.savings}</div>
                        <div>🛡️ Shields: {p.shields}</div>
                        <div className="font-semibold text-cyber-blue pt-1">Total: ₹{calculateScore(p)}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Game Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Rounds Completed:</span>
                    <div className="font-semibold">{gameRounds} / 2</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Current Turn:</span>
                    <div className="font-semibold">Player {currentPlayerIdx + 1}</div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={restartGame} variant="outline" className="w-full">
                Exit Game
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
