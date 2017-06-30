import { createComponent } from 'react-fela'

function menuRule ({ theme }) {
  const { menuWidth, menuFontSize, menuPaddingVertical, primaryBlue } = theme

  return {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: menuPaddingVertical,
    paddingBottom: menuPaddingVertical,
    minWidth: menuWidth,
    fontSize: menuFontSize,
    lineHeight: menuFontSize
  }
}

function itemRule ({ active, theme }) {
  const {
    menuWidth,
    menuFontSize,
    grey200,
    grey300,
    primaryBlue,
    menuItemPaddingLeft,
    primaryTextColor
  } = theme

  return {
    backgroundColor: active ? grey300 : null,
    paddingTop: menuFontSize,
    paddingBottom: menuFontSize,
    paddingLeft: '72px',
    paddingRight: menuFontSize,
    color: active ? primaryBlue : primaryTextColor,

    ':hover': {
      backgroundColor: active ? grey300 : grey200,
      color: primaryBlue
    }
  }
}

export const Menu = createComponent(menuRule)

export const MenuItem = createComponent(itemRule, 'a', ['onClick'])
