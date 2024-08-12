import {Platform} from 'react-native';
import {COLORS} from './colors';

export const SHADOWS = {
  none: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },

  one: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  two: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  three: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  four: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  five: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  six: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  seven: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 7,
      },
    }),
  },
};
