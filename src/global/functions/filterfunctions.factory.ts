export default function filterFunctionFactory(handlerFunction) {

    const checkbox = (target) => {
        const { type, checked, name } = target;
        handlerFunction(type, checked, name);
    }

    const number = (target) => {
        const { type, name, value } = target;
        handlerFunction(type, name, value);
    }

    return {
        checkbox,
        number
    }
}