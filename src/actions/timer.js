import * as types from './actionTypes';

export function updateTimer(setTime) {
    return {
        type: types.UPDATE_TIMER,
        setTime
    };
} 

export function startTimer(isTimerStarted) {
    return {
        type: types.START_TIMER,
        isTimerStarted
    };
} 

export function resetTimer(setTime) {
    return {
        type: types.RESET_TIMER,
        setTime
    };
} 

export function decrementTimer(timeLeft) {
    return {
        type: types.DECREMENT_TIMER,
        timeLeft
    };
} 