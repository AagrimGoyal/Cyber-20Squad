import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Trash2, RotateCcw, Plus, Minus } from "lucide-react";

interface Player {
  id: string;
  name: string;
  position: number;
  money: number;
  savings: number;
  shields: number;
  color: string;
}

interface GameEvent {
  type: "salary" | "spend" | "save" | "cyber_event" | "shield_bonus" | "none";
  description: string;
}

const PLAYER_COLORS = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181", "#AA96DA"];
const BOARD_LENGTH = 20;
const INITIAL_MONEY = 2000;

const BOARD_SPACES = [
  { name: "START", icon: "🚀", action: "none" },
  { name: "SALARY", icon: "💼", action: "salary" },
  { name: "SPEND", icon: "💸", action: "spend" },
  { name: "SAVE", icon: "💰", action: "save" },
  { name: "CYBER EVENT", icon: "⚠️", action: "cyber_event" },
  { name: "SALARY", icon: "💼", action: "salary" },
  { name: "SPEND", icon: "💸", action: "spend" },
  { name: "SHIELD", icon: "🛡️", action: "shield_bonus" },
  { name: "SAVE", icon: "💰", action: "save" },
  { name: "CYBER EVENT", icon: "⚠️", action: "cyber_event" },
  { name: "SALARY", icon: "💼", action: "salary" },
  { name: "SPEND", icon: "💸", action: "spend" },
  { name: "SAVE", icon: "💰", action: "save" },
  { name: "CYBER EVENT", icon: "⚠️", action: "cyber_event" },
  { name: "SALARY", icon: "💼", action: "salary" },
  { name: "SPEND", icon: "💸", action: "spend" },
  { name: "SHIELD", icon: "🛡️", action: "shield_bonus" },
  { name: "SAVE", icon: "💰", action: "save" },
  { name: "CYBER EVENT", icon: "⚠️", action: "cyber_event" },
  { name: "FINISH", icon: "🏁", action: "none" },
];

const CYBER_RISKS = [
  { description: "💌 Phishing Attack: Lost ₹1000 to fake bank email", loss: 1000 },
  { description: "🔓 OTP Shared Online: Unauthorized access, lose ₹500", loss: 500 },
  { description: "🦠 Malware Download: System compromised, lose ₹800", loss: 800 },
  { description: "🔑 Weak Password Hacked: Account stolen, lose ₹600", loss: 600 },
  { description: "🔗 Clicked Fake Link: Card details exposed, lose ₹1200", loss: 1200 },
  { description: "👨‍💻 Tech Support Scam: Paid for fake antivirus, lose ₹700", loss: 700 },
  { description: "💕 Romance Scam: Sent money to fake profile, lose ₹1500", loss: 1500 },
  { description: "💼 Job Scam: Paid for training materials, lose ₹900", loss: 900 },
  { description: "📈 Fake Investment Scheme: Lost on crypto, lose ₹2000", loss: 2000 },
  { description: "🎁 Lottery Scam: Paid to claim prize, lose ₹1100", loss: 1100 },
];

export default function Game() {
  const { toast } = useToast();
  const [setup, setSetup] = useState(true);
  const [numPlayers, setNumPlayers] = useState(2);
  const [playerNames, setPlayerNames] = useState(["", ""]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [lastEvent, setLastEvent] = useState<GameEvent>({ type: "none", description: "" });
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  function updatePlayerCount(delta: number) {
    const newNum = Math.max(1, Math.min(6, numPlayers + delta));
    setNumPlayers(newNum);
    const newNames = [...playerNames];
    if (newNum > newNames.length) {
      newNames.push("");
    } else {
      newNames.pop();
    }
    setPlayerNames(newNames);
  }

  function startGame() {
    const validNames = playerNames
      .slice(0, numPlayers)
      .filter((n) => n.trim());

    if (validNames.length < numPlayers) {
      toast({ title: "Please enter all player names" });
      return;
    }

    const newPlayers: Player[] = validNames.map((name, idx) => ({
      id: `p${idx}`,
      name,
      position: 0,
      money: INITIAL_MONEY,
      savings: 0,
      shields: 0,
      color: PLAYER_COLORS[idx % PLAYER_COLORS.length],
    }));

    setPlayers(newPlayers);
    setCurrentPlayerIdx(0);
    setSetup(false);
    setGameOver(false);
    setRound(1);
    setDiceResult(null);
    setLastEvent({ type: "none", description: "" });
  }

  function rollDice() {
    setIsRolling(true);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceResult(result);
      processMove(result);
      setIsRolling(false);
    }, 600);
  }

  function processMove(diceNum: number) {
    const updatedPlayers = [...players];
    const player = { ...updatedPlayers[currentPlayerIdx] };
    let newPosition = Math.min(player.position + diceNum, BOARD_LENGTH - 1);

    player.position = newPosition;
    const space = BOARD_SPACES[newPosition];
    let event: GameEvent = { type: "none", description: "" };

    switch (space.action) {
      case "salary":
        player.money += 1000;
        event = { type: "salary", description: "💼 Earned ₹1000 salary!" };
        break;
      case "spend":
        player.money = Math.max(0, player.money - 500);
        event = { type: "spend", description: "💸 Spent ₹500" };
        break;
      case "save":
        const saveAmount = Math.min(500, player.money);
        player.money -= saveAmount;
        player.savings += saveAmount;
        event = { type: "save", description: `💰 Saved ₹${saveAmount}` };
        break;
      case "cyber_event": {
        const risk = CYBER_RISKS[Math.floor(Math.random() * CYBER_RISKS.length)];
        if (player.shields > 0) {
          player.shields -= 1;
          event = { type: "cyber_event", description: `🛡️ ${risk.description} (Shield blocked!)` };
        } else {
          player.money = Math.max(0, player.money - risk.loss);
          event = { type: "cyber_event", description: `⚠️ ${risk.description}` };
        }
        break;
      }
      case "shield_bonus":
        player.shields += 1;
        event = { type: "shield_bonus", description: "🛡️ Earned a Cyber Shield!" };
        break;
    }

    updatedPlayers[currentPlayerIdx] = player;
    setPlayers(updatedPlayers);
    setLastEvent(event);

    if (newPosition === BOARD_LENGTH - 1) {
      if (round < 2) {
        setTimeout(() => {
          if (confirm("You reached FINISH! Start Round 2?")) {
            updatedPlayers[currentPlayerIdx].position = 0;
            setPlayers(updatedPlayers);
            setRound(2);
          }
        }, 1000);
      } else {
        setGameOver(true);
      }
    }
  }

  function nextTurn() {
    setDiceResult(null);
    setLastEvent({ type: "none", description: "" });
    setCurrentPlayerIdx((prev) => (prev + 1) % players.length);
  }

  function calculateScore(p: Player): number {
    return p.money + p.savings + p.shields * 250;
  }

  function endGame() {
    setGameOver(true);
  }

  // SETUP SCREEN
  if (setup) {
    return (
      <Layout>
        <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="bg-card/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">🎲 Cyber Budgeting Game</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-cyber-blue/10 p-4 rounded-lg border border-cyber-blue/30">
                    <p className="text-sm text-muted-foreground">
                      Combine budgeting with cybersecurity. Earn money, save wisely, and avoid cyber threats. The player with the highest score wins!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-3">Number of Players: {numPlayers}</label>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => updatePlayerCount(-1)}
                          variant="outline"
                          disabled={numPlayers <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <div className="flex-1 flex items-center justify-center font-bold text-lg">{numPlayers}</div>
                        <Button
                          onClick={() => updatePlayerCount(1)}
                          variant="outline"
                          disabled={numPlayers >= 6}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {playerNames.slice(0, numPlayers).map((_, idx) => (
                        <Input
                          key={idx}
                          value={playerNames[idx]}
                          onChange={(e) => {
                            const newNames = [...playerNames];
                            newNames[idx] = e.target.value;
                            setPlayerNames(newNames);
                          }}
                          placeholder={`Player ${idx + 1} Name`}
                          className="text-center"
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={startGame}
                    size="lg"
                    className="w-full bg-cyber-green text-white hover:bg-cyber-green/90 font-bold text-lg"
                  >
                    Start Game 🚀
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // GAME OVER SCREEN
  if (gameOver) {
    const scores = players.map((p) => ({ ...p, score: calculateScore(p) }));
    const winner = scores.reduce((max, p) => (p.score > max.score ? p : max));

    return (
      <Layout>
        <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-4xl text-center">🏆 Game Over!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-6 rounded-lg text-white text-center">
                    <div className="text-5xl mb-2">🎉</div>
                    <div className="text-2xl font-bold">{winner.name}</div>
                    <div className="text-lg mt-1">Total Score: ₹{winner.score}</div>
                  </div>

                  <div className="space-y-2">
                    {scores
                      .sort((a, b) => b.score - a.score)
                      .map((p, idx) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-4 bg-muted rounded-lg border-2"
                          style={{ borderColor: p.color + "50" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">
                              {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "  "}
                            </div>
                            <div>
                              <div className="font-bold">{p.name}</div>
                              <div className="text-xs text-muted-foreground">
                                💰 ₹{p.money} | 🏦 ₹{p.savings} | 🛡️ {p.shields}
                              </div>
                            </div>
                          </div>
                          <div className="text-xl font-bold" style={{ color: p.color }}>
                            ₹{p.score}
                          </div>
                        </div>
                      ))}
                  </div>

                  <Button
                    onClick={() => window.location.reload()}
                    size="lg"
                    className="w-full bg-cyber-blue text-white hover:bg-cyber-blue/90 font-bold"
                  >
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

  // MAIN GAME SCREEN
  const currentPlayer = players[currentPlayerIdx];

  return (
    <Layout>
      <section className="py-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-white">
              <h1 className="text-3xl font-bold">🎲 Round {round} / 2</h1>
            </div>
            <Button onClick={endGame} variant="outline" size="sm">
              End Game
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {/* BOARD */}
            <div className="lg:col-span-3">
              <Card className="bg-card/95 backdrop-blur overflow-hidden">
                <CardContent className="p-6">
                  {/* 2D BOARD */}
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-lg flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
                    <svg viewBox="0 0 520 320" className="w-full h-full">
                      {/* Board background */}
                      <defs>
                        <linearGradient id="boardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
                        </linearGradient>
                      </defs>

                      <rect x="20" y="20" width="480" height="280" fill="url(#boardGrad)" stroke="#3b82f6" strokeWidth="3" rx="10" />

                      {/* Draw spaces in rectangular path */}
                      {BOARD_SPACES.map((space, idx) => {
                        let x, y;
                        const spaceSize = 32;
                        const spacing = 36;

                        if (idx === 0) {
                          x = 40;
                          y = 280;
                        } else if (idx < 6) {
                          x = 40 + idx * spacing;
                          y = 280;
                        } else if (idx < 11) {
                          x = 220;
                          y = 280 - (idx - 5) * spacing;
                        } else if (idx < 16) {
                          x = 220 - (idx - 10) * spacing;
                          y = 40;
                        } else {
                          x = 40;
                          y = 40 + (idx - 15) * spacing;
                        }

                        const bgColor = space.action === "cyber_event" ? "#fca5a5" : space.action === "salary" ? "#86efac" : space.action === "save" ? "#bfdbfe" : space.action === "shield_bonus" ? "#fcd34d" : "#f3f4f6";
                        const borderColor = space.action === "cyber_event" ? "#dc2626" : space.action === "salary" ? "#16a34a" : space.action === "save" ? "#2563eb" : space.action === "shield_bonus" ? "#ca8a04" : "#9ca3af";

                        return (
                          <g key={idx}>
                            <rect x={x - spaceSize / 2} y={y - spaceSize / 2} width={spaceSize} height={spaceSize} rx="4" fill={bgColor} stroke={borderColor} strokeWidth="2" />
                            <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold">
                              {space.icon}
                            </text>
                            {idx === 0 || idx === BOARD_LENGTH - 1 ? (
                              <text x={x} y={y + 20} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#666">
                                {space.name}
                              </text>
                            ) : null}
                          </g>
                        );
                      })}

                      {/* Draw players */}
                      {players.map((p, pidx) => {
                        let x, y;
                        const spaceSize = 32;
                        const spacing = 36;

                        if (p.position === 0) {
                          x = 40;
                          y = 280;
                        } else if (p.position < 6) {
                          x = 40 + p.position * spacing;
                          y = 280;
                        } else if (p.position < 11) {
                          x = 220;
                          y = 280 - (p.position - 5) * spacing;
                        } else if (p.position < 16) {
                          x = 220 - (p.position - 10) * spacing;
                          y = 40;
                        } else {
                          x = 40;
                          y = 40 + (p.position - 15) * spacing;
                        }

                        const offset = 14 * pidx;

                        return (
                          <g key={p.id}>
                            <circle cx={x + offset - 14 * (players.length - 1) / 2} cy={y + offset - 14 * (players.length - 1) / 2} r="10" fill={p.color} stroke="white" strokeWidth="2" opacity={pidx === currentPlayerIdx ? 1 : 0.7} />
                            <text x={x + offset - 14 * (players.length - 1) / 2} y={y + offset - 14 * (players.length - 1) / 2} textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="bold" fill="white">
                              {p.name.charAt(0).toUpperCase()}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* EVENT */}
                  {lastEvent.type !== "none" && (
                    <div
                      className={`mt-6 p-4 rounded-lg text-center font-bold text-lg border-2 ${
                        lastEvent.type === "cyber_event"
                          ? "bg-red-100 dark:bg-red-900/50 text-red-900 dark:text-red-100 border-red-500 shadow-lg shadow-red-500/30"
                          : lastEvent.type === "salary"
                            ? "bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-100 border-green-500 shadow-lg shadow-green-500/30"
                            : lastEvent.type === "save"
                              ? "bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100 border-blue-500 shadow-lg shadow-blue-500/30"
                              : "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 border-yellow-500 shadow-lg shadow-yellow-500/30"
                      }`}
                    >
                      {lastEvent.description}
                    </div>
                  )}

                  {/* DICE */}
                  <div className="mt-6 flex flex-col items-center gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>{currentPlayer.name}</strong>'s Turn
                      </p>
                      {diceResult === null ? (
                        <Button
                          onClick={rollDice}
                          disabled={isRolling}
                          size="lg"
                          className="bg-cyber-green text-white hover:bg-cyber-green/90 font-bold text-lg px-8"
                        >
                          🎲 Roll Dice
                        </Button>
                      ) : (
                        <div className="flex gap-4 justify-center items-center">
                          <div className="relative w-20 h-20 flex items-center justify-center rounded-lg border-4 border-cyber-blue bg-white dark:bg-slate-800">
                            <div className="grid grid-cols-3 gap-1 w-full h-full p-2">
                              {Array.from({ length: 9 }).map((_, i) => {
                                const dots = diceResult === 1 ? [4] : diceResult === 2 ? [0, 8] : diceResult === 3 ? [0, 4, 8] : diceResult === 4 ? [0, 2, 6, 8] : diceResult === 5 ? [0, 2, 4, 6, 8] : [0, 1, 2, 6, 7, 8];
                                return (
                                  <div
                                    key={i}
                                    className={`rounded-full ${
                                      dots.includes(i)
                                        ? "bg-cyber-blue"
                                        : "bg-gray-200 dark:bg-gray-700"
                                    }`}
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <Button
                            onClick={nextTurn}
                            size="lg"
                            className="bg-cyber-blue text-white hover:bg-cyber-blue/90 font-bold"
                          >
                            Next →
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* SIDEBAR - PLAYERS */}
            <div className="space-y-4">
              <Card className="bg-card/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">Players</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {players.map((p, idx) => (
                    <div
                      key={p.id}
                      className={`p-3 rounded-lg border-2 transition ${
                        idx === currentPlayerIdx
                          ? "bg-slate-100 dark:bg-slate-700 border-cyber-green"
                          : "bg-muted border-border"
                      }`}
                      style={{
                        borderColor:
                          idx === currentPlayerIdx ? "#22c55e" : p.color + "40",
                      }}
                    >
                      <div className="flex gap-2 mb-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                        <div className="font-bold text-sm">{p.name}</div>
                      </div>
                      <div className="text-xs space-y-1 text-muted-foreground">
                        <div>💵 ₹{p.money}</div>
                        <div>🏦 ₹{p.savings}</div>
                        <div>🛡️ {p.shields}</div>
                        <div className="font-bold text-cyber-blue pt-1">
                          Total: ₹{calculateScore(p)}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">Legend</CardTitle>
                </CardHeader>
                <CardContent className="text-xs space-y-1">
                  <div>💼 Salary: +₹1000</div>
                  <div>💸 Spend: -₹500</div>
                  <div>💰 Save: +₹500 savings</div>
                  <div>⚠️ Cyber: Risk card</div>
                  <div>🛡️ Shield: +1 protection</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
