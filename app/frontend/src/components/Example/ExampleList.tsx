import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Can you find me a part number for which a fan blade has been completed?",
    "Give me detailed explanation about FAA order 8130.21G?",
    "Are there any penalities stated in the distribution agreement related documents?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
