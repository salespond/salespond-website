<template>
    <h1 
        class="text-heading-lg lg:text-heading-xl leading-tight " 
        :class="additionalClass" 
        v-html="highlightAText(textContent, highlightedText)"
    >
    </h1>
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'
import { highlightAText } from '@/js/composable/highlightAText'

export default {
    name: "HeadingWithHighlights",
    props: {
        textLocation: {
            type: String,
            default: 'normal',
        },
        text: {
            type: String,
            default: 'This is sample header',
        },
        highlight: {
            type: String,
            default: 'sample', 
        },
        textSize: {
            type: String,
            default: 'xl'
        }
    },
    setup(props: any) {
        const additionalClass = ref('')
        const { 
            text, 
            highlight, 
            textSize 
        } = toRefs(props)

        const fontSize = () => {
            switch(textSize.value) {
                case 'lg':
                    return 'lg:text-heading-lg'
                case 'xl':
                    return 'lg:text-heading-xl'
                default:
                    return 'lg:text-heading-xl'
            }
        }

        additionalClass.value = fontSize()

        // if (['home','footer', 'podiem', 'pricing', 'feature', 'dark'].includes(props.textLocation)) {
        //     additionalClass.value = 'footer-callout-text text-white ' + fontSize()
        // }

        return {
            additionalClass,
            textContent: text,
            highlightedText: highlight,
            highlightAText,
        }
    }
}
</script>

<style scoped>
h1 {
    text-shadow: 0px 1px 12px rgba(255,255,255,0.5);
}
.footer-callout-text::v-deep(.highlight) {
    color: black;
}

::v-deep(.highlight) {
    font-weight: 600;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    transform-origin: 0% 100%;
    line-height: none;
    background: -moz-linear-gradient(top,  rgba(255,255,255,0) 58%, #ff9600 60%, #ff9600 61%, #ff9600 91%, rgba(255,255,255,0) 93%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 58%,#ff9600 60%,#ff9600 61%,#ff9600 91%,rgba(255,255,255,0) 93%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 58%,#ff9600 60%,#ff9600 61%,#ff9600 91%,rgba(255,255,255,0) 93%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
}
</style>