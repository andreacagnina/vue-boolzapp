const { DateTime } = luxon;

const app = Vue.createApp({
    data() {
        return {
            activeContactIndex: 0,
            contactSearch: '',


            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        };
    },
    //     Le espressioni inline di Vue.js sono molto comode, ma i casi d'uso migliori per esse sono semplici operazioni booleane o concatenazioni di stringhe. Per una logica più complicata, dovresti usare le proprietà calcolate .
    // Una proprietà calcolata viene utilizzata per descrivere in modo dichiarativo un valore che dipende da altri valori.
    computed: {
        activeContactMessages() {
            return this.contacts[this.activeContactIndex].messages;
        },
    },
    methods: {
        // RECUPERA LA DATA E L'ORA E FORMATTALE SECONDO LUXON
        getCurrentDateTime() {
            const now = DateTime.now();
            return now.toFormat('dd/MM/yy HH:mm:ss');
        },
        // GUARDA MOUNTED SOTTO
        updateDateTime() {
            this.currentDateTime = this.getCurrentDateTime();
        },
        // PRENDI LA DATA CON L'ORARIO E SPLITTA L'ORARIO
        getTime(timeSplit) {
            const [data, time] = timeSplit.split(' ');
            return time;
        },
        // PRENDI LA DATA CON L'ORARIO E SPLITTA LA DATA
        getDate(dateSplit) {
            const [data, time] = dateSplit.split(' ');
            return data;
        },
        // AGGIUNGI UN NUOVO MESSAGGIO E PUSH IN MESSAGES e RICEVI LA RISPOSTA DAL CONTATTO DOPO 1 SECONDO
        addNewMessage() {
            if (this.NewMessage != null) {
                let newSent = {
                    // RICHIAMO DELLA FUNZIONE LUXON PER OTTENERE IL TEMPO
                    date: this.getCurrentDateTime(),
                    message: this.NewMessage,
                    status: 'sent',
                }
                setTimeout(this.receiveNewMessage, 1000);
                this.contacts[this.activeContactIndex].messages.push(newSent)
                this.NewMessage = null
            }
        },
        // RICEVI UN MESSAGGIO DI RISPOSTA
        receiveNewMessage() {
            let answer = {
                date: this.getCurrentDateTime(),
                message: 'Ciao Sofia, guarda che non so più come dirtelo, non so io il padre...Non contattarmi più!',
                status: 'received',
            }
            this.contacts[this.activeContactIndex].messages.push(answer);
        },
        // RICERCA TRAMITE V-MODEL E VISIBLE TRUE
        researchContact() {
            let search = this.contactSearch.toLowerCase();
            this.contacts.forEach(contact => {
                contact.visible = contact.name.toLowerCase().includes(search)
            });
        },
        // PRENDI L'ORA CORRENTE OGNI SECONDO
        mounted() {
            this.updateDateTime();
            setInterval(this.updateDateTime, 1000);
        },
    }
});

app.mount('#app');

