export default function filterFunctionFactory(handlerFunction) {

    const checkbox = (target: HTMLInputElement) => {
        const { type, checked, name } = target;
        handlerFunction(type, name, checked);
    }

    const number = (target: HTMLInputElement) => {
        const { type, name, value } = target;
        handlerFunction(type, name, value);
    }

    return {
        checkbox,
        number
    }
}