const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'mrbogdan - official website',
    description: 'Work in Progress (dsc.gg/mrbogdan)'
}


// default open graph data
const og = {
    title: 'Once UI for Next.js',
    description: 'We let designers code and developers design.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'One UI',
    description: 'Once UI is an open-source design system and component library for Next.js.',
    email: 'lorant@once-ui.com'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/_onceui',
    linkedin: 'https://www.linkedin.com/company/once-ui/',
    discord: 'https://discord.com/invite/5EyAQ4eNdS'
}

const routes = {
    '/':        true,
    '/portfolio':    true,
}

export { baseURL, style, meta, og, schema, social };