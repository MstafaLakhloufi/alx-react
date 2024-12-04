import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('test for action creators', () => {
    it('selectCourse should create an action to select a course', () => {
        const index = 1;
        const expectedAction = {
            type: SELECT_COURSE,
            index: 1,
        };
        expect(selectCourse(index)).toEqual(expectedAction);
    });

    it('unSelectCourse should create an action to unselect a course', () => {
        const index = 1;
        const expectedAction = {
            type: UNSELECT_COURSE,
            index: 1,
        };
        expect(unSelectCourse(index)).toEqual(expectedAction);
    });
});