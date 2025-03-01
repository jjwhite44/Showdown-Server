"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  encore: {
    inherit: true,
    condition: {
      durationCallback() {
        return this.random(3, 7);
      },
      onStart(target) {
        const lockedMove = target.lastMoveEncore?.id || "";
        const moveIndex = lockedMove ? target.moves.indexOf(lockedMove) : -1;
        if (moveIndex < 0 || target.lastMoveEncore?.flags["failencore"] || target.moveSlots[moveIndex].pp <= 0) {
          return false;
        }
        this.effectState.move = lockedMove;
        this.add("-start", target, "Encore");
      },
      onOverrideAction(pokemon) {
        return this.effectState.move;
      },
      onModifyMove(move, pokemon) {
        if (["normal", "any", "adjacentFoe"].includes(move.target)) {
          move.target = "randomNormal";
        }
      },
      onResidualOrder: 13,
      onResidual(target) {
        const lockedMoveIndex = target.moves.indexOf(this.effectState.move);
        if (lockedMoveIndex >= 0 && target.moveSlots[lockedMoveIndex].pp <= 0) {
          target.removeVolatile("encore");
        }
      },
      onEnd(target) {
        this.add("-end", target, "Encore");
      },
      onDisableMove(pokemon) {
        if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
          return;
        }
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id !== this.effectState.move) {
            pokemon.disableMove(moveSlot.id);
          }
        }
      }
    }
  }
};
//# sourceMappingURL=moves.js.map
