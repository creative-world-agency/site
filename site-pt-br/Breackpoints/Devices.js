const size = {
    mobileSm: '320px',
    mobileMd: '375px',
    mobileLg: '425px',
    tablet: '768px',
    laptopMd: '1024px',
    laptopLg: '1440px',
    desktopMd: '2560px',
    desktopLG: '3000px'
}
export const Device = {
    mobileSm: `(min-width: ${size.mobileSm})`,
    mobileMd: `(min-width: ${size.mobileMd})`,
    mobileLg: `(min-width: ${size.mobileLg})`,
    tablet:   `(min-width: ${size.tablet})`,
    laptopMd: `(min-width: ${size.laptopMd})`,
    laptopLg: `(min-width: ${size.laptopL})`,
    desktopMd: `(min-width: ${size.desktopMd})`,
    desktopLg: `(min-width: ${size.desktopLG})`
}