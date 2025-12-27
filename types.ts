
export interface BusinessData {
  name: string;
  city: string;
  state: string;
}

export interface ReportState {
  isLoading: boolean;
  content: string | null;
  error: string | null;
}
