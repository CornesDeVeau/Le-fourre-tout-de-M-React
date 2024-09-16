"use client";

import { useState } from "react";
import clsx from "clsx";
import Metadata from "@/Metadata";

const emptyBoard = ["", "", "", "", "", "", "", "", ""];

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Board({
  board,
  handleMove,
  isX,
  winner,
}: {
  board: string[];
  handleMove: (cellId: number) => void;
  isX: boolean;
  winner: string | null;
}) {
  const winningCells: boolean[] = board.map((cell, index) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (index === a || index === b || index === c) {
          return true;
        }
      }
    }
    return false;
  });
  return (
    <div className="w-[225px]">
      <div
        className={clsx(
          "grid grid-rows-3 grid-cols-3 m-5 w-[130px] h-[130px] justify-items-center content-items-center",
          { "mt-[60px]": winner }
        )}
      >
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              onClick={() => handleMove(index)}
              className={clsx(
                "border-4 border-black rounded-full w-10 h-10 text-xl font-bold",
                { "md:active:bg-blue-500 md:hover:bg-blue-200": isX },
                { "md:active:bg-orange-500 md:hover:bg-orange-200": !isX },
                {
                  "bg-blue-200 text-blue-800":
                    cell === "X" && !winningCells[index],
                },
                {
                  "bg-orange-200 text-orange-800":
                    cell === "O" && !winningCells[index],
                },
                { "bg-green-200 text-green-800": winningCells[index] }
              )}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function History({
  history,
  handleTimeTravel,
}: {
  history: string[][];
  handleTimeTravel: (boardId: number) => void;
}) {
  return (
    <ol className="grid grid-rows-1 grid-cols-10 gap-[150px] m-5 text-lg font-semibold">
      {history.map((board, index) => {
        return (
          <li key={index} className="flex flex-col min-w-[150px]">
            <Board
              board={board}
              handleMove={(x) => (x ? null : null)}
              isX={true}
              winner={null}
            />
            <button
              onClick={() => handleTimeTravel(index)}
              className="border-4 rounded-lg border-red-500 bg-sky-400 ml-5 hover:bg-sky-600 active:bg-yellow-400"
            >
              🕗🔙🕘
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default function Page() {
  const [board, setBoard] = useState(emptyBoard);
  const [history, setHistory] = useState([board]);
  const [nextMove, setNextMove] = useState(0);
  const isX = nextMove % 2 === 0;
  const winner = computeWinner(board);

  function handleMove(cellId: number) {
    if (board[cellId] === "" && winner === null) {
      const nextBoard = board.map((cell, index) =>
        index === cellId ? (isX ? "X" : "O") : cell
      );
      setBoard(nextBoard);
      const newHistory: string[][] = [
        ...history.splice(0, nextMove + 1),
        nextBoard,
      ];
      setNextMove(nextMove + 1);
      setHistory(newHistory);
    } else {
      return null;
    }
  }

  function handleTimeTravel(boardId: number) {
    const newBoard = history[boardId];
    const newHistory = [...history.slice(0, boardId), newBoard];

    setNextMove(boardId);
    setBoard(newBoard);
    setHistory(newHistory);
  }

  return (
    <main>
      <Metadata seoTitle="Tic-Tac-Toe" seoDescription="Tic Tac Toe minigame." />
      <div
        className={clsx(
          "border-8 rounded-2xl border-blue-500 max-w-[250px]",
          { "bg-yellow-200": winner === null },
          { "bg-blue-100 text-blue-800": winner === "X" },
          { "bg-orange-100 text-orange-800": winner === "O" }
        )}
      >
        {winner ? (
          <></>
        ) : (
          <h1
            className={clsx(
              "text-2xl m-2 w-[205px]",
              { "bg-blue-200 text-blue-800": isX },
              { "bg-orange-200 text-orange-800": !isX }
            )}
          >
            Prochain joueur : {isX ? "X" : "O"}
          </h1>
        )}
        <div className="flex flex-row">
          <Board
            board={board}
            handleMove={handleMove}
            isX={isX}
            winner={winner}
          />
        </div>
        <h2 className="flex text-xl justify-center">
          Gagnant : {computeWinner(board)}
        </h2>
      </div>
      <div
        className={clsx(
          "border-8 rounded-2xl border-blue-500 max-w-[50%] overflow-scroll",
          { "bg-yellow-200": winner === null },
          { "bg-blue-100 text-blue-800": winner === "X" },
          { "bg-orange-100 text-orange-800": winner === "O" }
        )}
      >
        <History history={history} handleTimeTravel={handleTimeTravel} />
      </div>
    </main>
  );
}

function computeWinner(board: string[]) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
