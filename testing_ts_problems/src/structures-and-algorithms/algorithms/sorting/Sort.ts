import Comparator from '../../utils/Comparator';

export type CompareCallBacksType = {
  compareCallback: Function;
  visitingCallback: Function;
}

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */
export default class Sort {

  callbacks:CompareCallBacksType;
  comparator: Comparator;

  constructor(originalCallbacks: CompareCallBacksType) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }

  /**
   * @param {SorterCallbacks} originalCallbacks
   * @returns {SorterCallbacks}
   */
  static initSortingCallbacks(originalCallbacks: CompareCallBacksType) {
    const callbacks = originalCallbacks || {} as CompareCallBacksType ;
    const stubCallback = () => {};

    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

    return callbacks;
  }

  sort(arr: []) {
    throw new Error('sort method must be implemented');
  }
}