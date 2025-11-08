export interface JobType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  overallScore: number;
  createdAt: string;
  completedAt: string;
  company: {
    name: string;
    icon: string;
    companyID: string;
  };
}
