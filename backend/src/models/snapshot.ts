export interface Snapshot {
  id: number;
  userId: number;
  createdAt: string;
  windowId: number;
  tabs: { title: string; url: string; favIconUrl?: string }[];
  name?: string;
  group?: string;
  device?: string;
}

let snapshots: Snapshot[] = [];
let idCounter = 1;

export function saveSnapshot(s: Omit<Snapshot, 'id'>): Snapshot {
  const snapshot = { ...s, id: idCounter++ };
  snapshots.push(snapshot);
  return snapshot;
}

export function getSnapshotsByUser(userId: number): Snapshot[] {
  return snapshots.filter(s => s.userId === userId);
}

export function renameSnapshot(userId: number, id: number, name: string): boolean {
  const snap = snapshots.find(s => s.id === id && s.userId === userId);
  if (snap) { snap.name = name; return true; }
  return false;
}

export function deleteSnapshots(userId: number, ids: number[]): number {
  const before = snapshots.length;
  snapshots = snapshots.filter(s => s.userId !== userId || !ids.includes(s.id));
  return before - snapshots.length;
}

export function groupSnapshot(userId: number, id: number, group: string): boolean {
  const snap = snapshots.find(s => s.id === id && s.userId === userId);
  if (snap) { snap.group = group; return true; }
  return false;
} 