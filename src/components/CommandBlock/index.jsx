import React, { useState } from 'react';
import styles from './CommandBlock.module.css';

export default function CommandBlock({ command, description }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.commandBlock}>
            <div className={styles.header}>
                <span className={styles.icon}>⌘</span>
                {description && <span className={styles.description}>{description}</span>}
            </div>
            <div className={styles.commandWrapper}>
                <code className={styles.command}>{command}</code>
                <button
                    className={styles.copyButton}
                    onClick={copyToClipboard}
                    title="Копировать"
                >
                    {copied ? '✓' : 'Copy'}
                </button>
            </div>
        </div>
    );
}
