import { expect } from 'code';
import * as types from '../actions/actionTypes';
import timerReducer from './timer';

const mockDefaultTime = 60;
const mockSetTime = 40;
const initialState = {
        isTimerRunning: false,
        defaultTime: 60,
        currentTime: 60
}

describe('Given `timerReducer`', () => {

    it('should return the initial state when none is given', () => {

        const expectedState = {};

        expect(timerReducer(undefined, { type: 'NO_MATCH'})).to.equal(expectedState);

    });

    it('should handle CREATE_TIMER', () => {

        const expectedState = { isTimerRunning: undefined, defaultTime: 60, currentTime: 60 };

        expect(timerReducer(undefined, { type: types.CREATE_TIMER, expectedState })).to.equal(expectedState);

    });

    it('should handle CONTROL_TIMER', () => {

        const expectedState = { isTimerRunning: true };

        expect(timerReducer(undefined, { type: types.CONTROL_TIMER, isTimerRunning: true })).to.equal(expectedState);

    });

    it('should handle RESET_TIMER', () => {

        const expectedState = { currentTime: mockDefaultTime, isTimerRunning: false };

        expect(timerReducer(undefined, { type: types.RESET_TIMER, currentTime: mockDefaultTime })).to.equal(expectedState);

    });

    it('should handle UPDATE_TIMER', () => {

        const expectedState = { currentTime: mockSetTime, defaultTime: mockSetTime, isTimerRunning: false };

        expect(timerReducer(undefined, { type: types.UPDATE_TIMER, setTime: mockSetTime })).to.equal(expectedState);

    });

    it('should handle DECREMENT_TIMER', () => {

        const expectedState = { currentTime: mockDefaultTime - 1 };

        expect(timerReducer(undefined, { type: types.DECREMENT_TIMER, timeLeft: mockDefaultTime })).to.equal(expectedState);

    });

    it('should handle FETCH_TIMER', () => {

        const mockTimerDate = { isTimerRunning: false, defaultTime: 40, currentTime: 30}

        expect(timerReducer(initialState, { type: types.FETCH_TIMER, timer:mockTimerDate })).to.equal(mockTimerDate);

    });

});