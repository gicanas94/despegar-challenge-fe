import { font } from '.';

const textColor = '#3e424b';
const themeMainColor = '#c95538';

export default {
  components: {
    app: {
      maxWidth: '1680px',
    },
    box: {
      background: '#f2f2f2',
      border: '1px solid #cccccc',
      borderRadius: '8px',
    },
    button: {
      background: {
        default: themeMainColor,
        hover: '#b15139',
        disabled: '#cdcdcd',
      },
      borderRadius: '4px',
      color: {
        default: '#ffffff',
        disabled: '#a4a4a4',
      },
      fontSize: font.size.l,
      fontWeight: font.weight.bold,
    },
    header: {
      background: 'linear-gradient(#c16742, #c74b2c)',
      borderBottom: '1px solid #7c3523',
      emoji: {
        fontSize: '60px',
      },
      maxWidth: '1680px',
    },
    input: {
      background: '#e3e3e3',
      borderBottomWidth: '2px',
      borderRadius: '4px',
      color: {
        default: '#808588',
        disabled: '#d9dddc',
        error: '#c21807',
        success: '#3bb143',
      },
      errorMessage: {
        fontSize: font.size.xxs,
        fontWeight: font.weight.bold,
      },
      label: {
        fontSize: font.size.s,
        fontWeight: font.weight.bold,
      },
    },
    loadingScreen: {
      background: 'rgba(255, 255, 255, 0.8)',
      emoji: {
        fontSize: '100px',
      },
    },
    menuBox: {
      name: {
        fontSize: font.size.s,
      },
      description: {
        color: '#777b83',
        fontSize: font.size.xs,
      },
      price: {
        color: '#777b83',
        fontSize: font.size.xs,
      },
      addItemToOrderIcon: {
        color: themeMainColor,
      },
    },
    orderSummaryBox: {
      title: {
        fontSize: font.size.m,
      },
      summaryListHeader: {
        fontSize: font.size.s,
        fontWeight: font.weight.bold,
      },
      summaryItem: {
        color: '#777b83',
        fontSize: font.size.s,
      },
      total: {
        fontSize: font.size.xxxl,
      },
      removeItemFromOrderIcon: {
        color: '#d23838',
      },
    },
    restaurantBox: {
      name: {
        fontSize: font.size.m,
      },
      description: {
        fontSize: font.size.s,
      },
      shippingPrice: {
        color: '#777b83',
        fontSize: font.size.s,
      },
    },
    stepViewer: {
      color: {
        currentStep: '#f0f0f0',
        notCurrentStep: '#742811',
      },
      stepNumber: {
        borderStyle: 'solid',
        borderWidth: '3px',
        fontSize: '50px',
      },
      stepName: {
        fontSize: font.size.m,
        fontWeight: font.weight.bold,
      },
      stepDescription: {
        fontSize: font.size.xs,
      },
    },
  },
  forms: {
    personalInfo: {
      title: {
        fontSize: font.size.m,
      },
    },
  },
  pages: {
    confirmation: {
      title: {
        fontSize: '60px',
      },
      pre: {
        fontSize: font.size.xxxs,
      },
    },
    restaurantSelection: {
      h2: {
        fontSize: '40px',
      },
      searchInput: {
        background: 'transparent',
        borderBottom: '2px solid #909296',
        color: '#909296',
        fontSize: '40px',
        placeholderColor: '#909296',
        noResultsMessage: {
          fontSize: font.size.xxxl,
        },
      },
    },
  },
  htmlTags: {
    a: {
      color: themeMainColor,
      fontWeight: font.weight.medium,
    },
    body: {
      background: '#e6e4e2',
      color: textColor,
      fontFamily: font.family.alegreyaSans,
      fontSize: font.size.sm,
    },
  },
};
