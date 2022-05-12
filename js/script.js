const app = new Vue({
    // collegamento con l'html 
    el: "#root",
    // dati e variabili 
    data: ( {
        // Array dei contatti 
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 04:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
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
                avatar: '_2',
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
                avatar: '_3',
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
                avatar: '_4',
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
                name: 'Alessandra L.',
                avatar: '_5',
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
                avatar: '_6',
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
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, error quibusdam. Dicta sint sed neque doloremque rem eligendi nam voluptates harum cupiditate tempora cumque distinctio ad numquam velit, atque repellendus.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, error quibusdam. Dicta sint sed neque doloremque rem eligendi nam voluptates harum cupiditate tempora cumque distinctio ad numquam velit, atque repellendus.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
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
                avatar: '_8',
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
                        date: '10/01/2020 16:01:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Tizio senza messaggi',
                avatar: '_8',
                visible: true,
                messages: [
                    // {
                    //     date: '10/01/2020 15:30:55',
                    //     message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    //     status: 'received'
                    // },

                ],
            }
        ],
        // oggetto 'contact' del utente 
        io: {
            name: 'Lorenzo Papperini',
            avatar: '_io',
            visible: true,
            message: []
        },
        // index della chat attiva 
        actIndex: 0,
        search: "",
        inputMessage: "",
        firstMessage: 0,
        

        delMessage: -1,

        
        
    }),
    methods: {
        filterChat: function() {
            
            // Scorro l'array di chats
            // Per ogni elmento
            // se il name contiene il search,
            // visible diventa true
            // altrimenti
            //visible diventa false
            this.contacts.forEach((item) => {
                const formattedText = item.name.toLowerCase();
                const formattedSearch = this.search.toLowerCase();
                if (formattedText.includes(formattedSearch)) {
                    item.visible = true;
                } else {
                    item.visible = false;
                }
            });
        },
        changeChat(index) {
            this.actIndex = index;
            this.delMessage = -1; 

        },
        // trasformo una stringa data in una data formato americano
        transformDate: str => {
            
            const newString = str.slice( 3 , 6 ) +  str.slice(0,3)  + str.slice(6);


            const time = new Date(newString.replaceAll("/","-"));
            let hour = time.getHours();
            hour = hour > 9 ? hour : `0${hour}`;
            let minutes = time.getMinutes();
            minutes = minutes > 9 ? minutes : `0${minutes}`;
            return hour + ":" + minutes;

        },
        // trasformo da data di adesso a stringa data 
        strDate: () => {
            const date = new Date();
            // se sono minori di 10 aggiungo uno 0 davanti
            let day = date.getDate();
            day = day > 9 ? day : `0${day}`;
            let mounth = date.getMonth();
            mounth = mounth > 9 ? mounth : `0${mounth}`;
            let hour = date.getHours();
            hour = hour > 9 ? hour : `0${hour}`;
            let minutes = date.getMinutes();
            minutes = minutes > 9 ? minutes : `0${minutes}`;
            let seconds = date.getSeconds();
            seconds = seconds > 9 ? seconds : `0${seconds}`;
            // ritorno la stringa 
            return(`${day}/${mounth}/${date.getFullYear()} ${hour}:${minutes}:${seconds}`);
            // 
            
            
        },
        // aggiunge al array messages il messaggio scritto 
        addMessage: function() {
            const input = this.inputMessage.trim();
            if (input.length > 0) {
                this.contacts[this.actIndex].messages.push(
                    {
                        date: this.strDate(),
                        message: input,
                        status: 'sent'
                    });
                // Resetto l'input
                this.inputMessage = "";
                setTimeout( () => {
                    this.contacts[this.actIndex].messages.push(
                        {
                            date: this.strDate(),
                            message: "Ok",
                            status: 'received'
                        });
                    }
                    ,1000);
            }

        },
        // Funzine che attiva il menu a tendina 
        activeMenu(index) {
            
            this.delMessage = index;
            


        },

        removeMessage(index) {
            this.contacts[this.actIndex].messages.splice(index, 1);
            this.delMessage = -1;

        },


    },


});