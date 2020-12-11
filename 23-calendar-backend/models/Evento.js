const { Schema, model } = require('mongoose');

// Esquema de Eventos.
const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

// Para la serialización del objeto a la base de datos
EventoSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject(); // deja fuera a __v
    object.id = _id; // reemplaza _id por id
    return object;
})

module.exports = model('Evento', EventoSchema);
