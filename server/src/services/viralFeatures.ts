const leaderboard = new Map<string, number>();

export function trackMemeCreation(topic: string) {
  leaderboard.set(topic, (leaderboard.get(topic) || 0) + 1);
}

export function getLeaderboard() {
  return Array.from(leaderboard.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
}