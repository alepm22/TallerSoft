import { Pool } from 'pg';
import { TestResultDataObject } from './TestResultDataObject';
import { ITimelineEntry } from './ITimelineCommit';

export interface IDBJobsRepository {
    pool: Pool;
    repositoryExists(owner: string, repoName: string): Promise<boolean>;
    saveLogs(timeline: ITimelineEntry[]): Promise<void>;
    getCommitExecutions(sha: string, owner: string, repo: string): Promise<any>;
    findJobByCommit(sha: string, owner: string, repoName: string): Promise<any | null>;
    updateJobConclusion(sha: string, repoOwner: string, repoName: string, conclusion: string): Promise<void>;
}