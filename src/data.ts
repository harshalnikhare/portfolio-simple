import resumeJson from '../harshal_nikhare_resume_JSON.json';
import type { ResumeData } from './types';

export const resumeData: ResumeData = resumeJson as unknown as ResumeData;
