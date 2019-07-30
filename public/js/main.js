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
			members: ['Paul', 'Daisy'],
			messages: [
				{
					user_id: 1,
					user_name: 'Paul',
					user_img: '/download.jpeg',
					timestamp: '13:40',
					date: 1537771200000,
					user_messages: [
							   'Hello Daisy.'
							   , 'You will need to bring your own supplies '
						   ]

					   }
					   
				   ]
		},
		current_user: {
			user_id: 3,
			user_name: 'Daisy',
			user_img: '/images.jpeg',
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