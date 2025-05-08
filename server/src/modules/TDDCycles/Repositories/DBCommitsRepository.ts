import { BaseRepository } from "./BaseRepository";
import { CommitDataObject } from "../Domain/CommitDataObject";
import { mapCommitDBToCommitDataObject } from "../mappers/CommitMapper";
import { Commit } from "@prisma/client";

export class DBCommitsRepository extends BaseRepository {
  async saveCommit(commit: CommitDataObject): Promise<void> {
    await this.prisma.commit.create({
      data: {
        sha: commit.sha,
        repositoryId: commit.repositoryId,
        createdAt: commit.createdAt,
      },
    });
  }

  async findCommitBySha(sha: string): Promise<CommitDataObject | null> {
    const result = await this.prisma.commit.findUnique({ where: { sha } });
    if (!result) return null;
    return mapCommitDBToCommitDataObject(result);
  }

  async findCommitById(id: string): Promise<CommitDataObject | null> {
    const result = await this.prisma.commit.findUnique({ where: { id } });
    if (!result) return null;
    return mapCommitDBToCommitDataObject(result);
  }

  async findCommitsByRepository(repositoryId: string): Promise<CommitDataObject[]> {
    const result = await this.prisma.commit.findMany({
      where: { repositoryId },
      orderBy: { createdAt: "desc" },
    });

    return result.map(mapCommitDBToCommitDataObject);
  }

  async findLastCommitByRepository(repositoryId: string): Promise<CommitDataObject | null> {
    const result = await this.prisma.commit.findFirst({
      where: { repositoryId },
      orderBy: { createdAt: "desc" },
    });

    if (!result) return null;
    return mapCommitDBToCommitDataObject(result);
  }

  async deleteCommitsByRepository(repositoryId: string): Promise<void> {
    await this.prisma.commit.deleteMany({ where: { repositoryId } });
  }

  async deleteCommit(id: string): Promise<void> {
    await this.prisma.commit.delete({ where: { id } });
  }
}
