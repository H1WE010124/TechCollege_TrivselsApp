import PropTypes from 'prop-types';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import styles from './SvarGraf.module.scss';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// Registrér Chart.js elementer, så de kan bruges til at lave et søjlediagram
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const SvarGraf = ({ spørgsmål }) => {
    // Data, der skal vises i søjlediagrammet
    const testData = [
        { label: 'Dårlig', count: 10, icon: <SentimentVeryDissatisfiedIcon style={{ color: '#388e3c' }} /> },
        { label: 'Okay', count: 20, icon: <SentimentNeutralIcon style={{ color: '#388e3c' }} /> },
        { label: 'God', count: 30, icon: <SentimentVerySatisfiedIcon style={{ color: '#388e3c' }} /> },
    ];

    // Brugertilstand til at holde styr på, hvilke kommentarer der er åbne
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    // Dataopsætning til søjlediagrammet
    const chartData = {
        labels: testData.map(() => ''), // Tøm labels for at undgå tekst under søjlerne
        datasets: [
            {
                label: 'Svarfordeling', // Navn på datasættet (kan vises som tooltip)
                data: testData.map(item => item.count), // Henter `count` fra hvert element i testData til diagrammet
                backgroundColor: '#2E7D32', // Farve på søjlerne
            },
        ],
    };

    // Diagramindstillinger, f.eks. y-aksens skala og tooltip
    const chartOptions = {
        plugins: {
            legend: { display: false }, // Skjuler legend, da den ikke er nødvendig
            tooltip: { enabled: true }, // Aktiverer værktøjstip (tooltip) på hover
        },
        scales: {
            y: {
                beginAtZero: true, // Starter y-aksen fra 0
                max: 40, // Maksimumværdi på y-aksen
                ticks: {
                    stepSize: 15, // Afstand mellem y-aksens markeringer
                    callback: value => [0, 15, 25, 40].includes(value) ? value : null, // Viser kun disse værdier
                },
            },
        },
    };

    // Funktion til at åbne og lukke kommentar-sektioner
    const toggleComments = (index) => {
        setExpandedIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className={styles.container} aria-labelledby="spørgsmål-titel">
            {/* Overskrift med spørgsmålet */}
            <h2 id="spørgsmål-titel" className={styles.title}>{spørgsmål}</h2>

            {/* Diagramvisning */}
            <div className={styles.chartWrapper}>
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Kommentar-sektionen, der kan foldes ud */}
            <div className={styles.commentSection}>
                {testData.map((item, index) => (
                    <div key={index} className={styles.commentToggle} onClick={() => toggleComments(index)}>
                        {/* Viser ikon og antal svar */}
                        <span className={styles.emojiLabel}>
                            {item.icon} {item.count} svar
                        </span>
                        {/* Viser pil, der skifter retning afhængigt af om sektionen er åben eller lukket */}
                        <span>{expandedIndexes.includes(index) ? '▲' : '▼'}</span>
                        {/* Hvis sektionen er åben, vises kommentarer her */}
                        {expandedIndexes.includes(index) && (
                            <ul className={styles.commentList}>
                                {item.comments?.map((comment, i) => (
                                    <li key={i}>{comment}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

// Validering af komponentens prop-typer
SvarGraf.propTypes = {
    spørgsmål: PropTypes.string.isRequired, 
};


// til app.jsx
{/* <div className="App">
<SvarGraf spørgsmål="Hvordan har dagen været?" />
</div> */}