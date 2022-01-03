export interface Message {
    text: string,
    type: string
}

export class FormMessages {

    static messagesTypes = {
        error: 'danger',
        success: 'success',
        info: 'tertiary'
    }

    static message = {
        required: { text: 'Campo obrigatório.', type: this.messagesTypes.error }
    }

    static get(key: string): Message {
        return this.message[key]
    }

}