Vue.component('user-message-template', {
	props: ['message'],
	template: '<div class="user-message-wrapper" :data-user-id="message.user_id">' +
		'<div class="user-image-wrapper">' +
		'<div :style="{\'background-image\': \'url(\' + message.user_img + \')\'}"></div>' +
		'</div>' +
		'<div class="user-message-content">' +
		'<div class="message-info">' +
		'<span class="user-name">{{ message.user_name }}</span>' +
		'<span class="timestamp">{{ message.timestamp }}</span>' +
		'</div>' +
		'<div class="user-messages">' +
		'<span v-for="user_message in message.user_messages">{{ user_message }}</span>' +
		'</div>' +
		'</div>' +
		'</div>'
});

var app = new Vue({
	el: '#chat-content',
	data: {
		chat_info: {
			name: 'Jobs',
			members: ['Paul', 'Pablo'],
			messages: [
				{
					user_id: 1,
					user_name: 'Paul',
					user_img: 'https://res.cloudinary.com/natalik/image/upload/v1537764121/images/The-Fall.jpg',
					timestamp: '13:40',
					date: 1537771200000,
					user_messages: [
							   'Hello Stella.'
							   , 'How are you!?'
						   ]

					   }
					   
				   ]
		},
		current_user: {
			user_id: 3,
			user_name: 'Pablo',
			user_img: 'https://res.cloudinary.com/natalik/image/upload/v1537842919/images/Nick_Fury.png',
			user_messages: ''
		}
	},
	methods: {
		sendMessage: function () {
			var TIME_INTERVAL = 60000;
			var date = new Date();

			if (!this.current_user.user_messages) return;

			this.$refs.messageField.innerHTML = '';
		  
			if ((this.chat_info.messages[this.chat_info.messages.length - 1].user_id == this.current_user.user_id) &&
				(date - this.chat_info.messages[this.chat_info.messages.length - 1].date) <= TIME_INTERVAL) {

				this.chat_info.messages[this.chat_info.messages.length - 1].user_messages.push(this.current_user.user_messages);
				this.current_user.user_messages = '';
				return;
			}

			this.chat_info.messages.push({
				user_id: this.current_user.user_id,
				user_name: this.current_user.user_name,
				user_img: this.current_user.user_img,
				timestamp: new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()),
				date: date,
				user_messages: [this.current_user.user_messages]
			});
		  
		  this.current_user.user_messages = '';
		},
		getCurrentMessage: function (event) {
			this.current_user.user_messages = event.target.textContent;
		},
		senMessageByEnter: function (event) {
			if (event.keyCode != 13) return;
			this.sendMessage();
			event.preventDefault();
		}
	}
});