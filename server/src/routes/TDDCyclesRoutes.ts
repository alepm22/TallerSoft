import express from "express";
import { DBCommitsRepository } from "../modules/TDDCycles/Repositories/DBCommitsRepository";
import { GithubRepository } from "../modules/TDDCycles/Repositories/GithubRepository";
import TDDCyclesController from "../controllers/TDDCycles/TDDCyclesController";

// Create instances of your repositories
const dbCommitsRepository = new DBCommitsRepository();
const githubRepository = new GithubRepository();

// Create an instance of your controller
const tddCyclesController = new TDDCyclesController(
  dbCommitsRepository,
  githubRepository
);

// Create a new router to handle the TDDCycles routes
const TDDCyclesRouter = express.Router();

// Get all commits from a repository in Github (TDD Cycles)
TDDCyclesRouter.get(
  "/commits",
  async (req, res) => await tddCyclesController.getTDDCycles(req, res)
);

<<<<<<< HEAD
// Get all test results from a repository in Github
TDDCyclesRouter.get(
  "/jobs",
  async (req, res) => await tddCyclesController.getTestResults(req, res)
);

TDDCyclesRouter.post(
  "/upload-log",
  async (req, res) => await tddCyclesController.uploadTDDLog(req, res)
);

TDDCyclesRouter.get( //en teoria aqui deberia recibir el sha del commit
  "/commit-timeline",
  async (req, res) => await tddCyclesController.getCommitTimeLine(req, res)
);

//Ruta para obtener los commits de un repositorio de la BD
TDDCyclesRouter.get(
  "/get-commits",
  async (req, res) => await tddCyclesController.getCommits(req, res)
);

export default TDDCyclesRouter;
=======
export default TDDCyclesRouter;
>>>>>>> 8c9662f412d86b657841161462b5f134037ca568
