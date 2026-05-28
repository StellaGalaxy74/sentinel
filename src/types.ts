export interface ThreatEvent {
  id: string;
  type: string;
  origin: string;
  target: string;
  action: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  timestamp: string;
}
