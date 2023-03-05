import { reactive } from "vue";


export const store = reactive({
    socials: [
        {
            name: 'github',
            image: 'github.svg',
            link: 'https://github.com/sder12'
        },
        {
            name: 'linkedin',
            image: 'linkedin.svg',
            link: 'https://www.linkedin.com/in/sara-cetto'
        },
        {
            name: 'behance',
            image: 'behance.svg',
            link: 'https://www.behance.net/sara_cetto'
        },
        {
            name: 'instagram',
            image: 'instagram.svg',
            link: 'https://www.instagram.com/saracetto/'
        },
    ]
});