import './Principal.css';
import Post from './Post';
import darth_vader from '../assets/darth_vader.jpg'
import darth from '../assets/darth.jpg'
import dwight from '../assets/dwight.jpg'
import por_do_sol from '../assets/por_sol.jpg'
import anakin from '../assets/anakin.webp'
import frodo from '../assets/frodo.jpg'
import gimli from '../assets/gimli.jpg'
import jim from '../assets/jim-halpert-de-the-office.jpg'
import palpatine from '../assets/palpatine.jpg'
import grace from '../assets/grace.webp'
import the_office from '../assets/the-office.jpg'
import peter from '../assets/peter.jpg'

const personagens = [
    {
        username: 'darth.vader',
        nome: 'Darth Vader',
        profileImage: darth,
        time: '2 horas atrás',
        postImage: darth_vader,
        likes: 128450,
        caption: 'Vida longa, meu mestre.',
        comments: [
            { user: 'palpatine.oficial', text: 'Muito bem meu aprendiz.' },
        ]
    },
    {
        username: 'dwight.k.schrute',
        nome: 'Palpatine',
        profileImage: dwight,
        time: '5 horas atrás',
        postImage: the_office,
        likes: 66600,
        caption: 'Hoje, fumar vai salvar vidas',
    },
    {
        username: 'anakin_pod',
        nome: 'Anakin Skywalker',
        profileImage: anakin,
        time: '8 horas atrás',
        postImage: por_do_sol,
        likes: 44200,
        caption: 'Odeio areia. É áspera, grossa e está em todo lugar. Mas o pôr do sol em Tatooine... isso eu não odeio.',
        comments: [
            { user: 'padme_amidala', text: '😍 esse ângulo ficou lindo amoorr' },
        ]
    },
    {
        username: 'frodo.baggins',
        nome: 'Frodo Bolseiro',
        profileImage: frodo,
        time: '1 dia atrás',
        postImage: 'https://picsum.photos/seed/frodo/600/600',
        likes: 8425,
        caption: 'Descansar um pouco depois de salvar o condado, que ninguém é de ferro né',
        comments: [
            { user: 'samwise.gamgee', text: 'Merecemos, né Frodão' },
            { user: 'gimli.filho.gloin', text: 'E nem me chamaram' },
        ]
    },
    {
        username: 'grace.oficial',
        nome: 'grace',
        profileImage: grace,
        time: '1 dia atrás',
        postImage: 'https://picsum.photos/seed/gimli/600/600',
        likes: 7842,
        caption: 'Depois de tanto caos, é muito bom voltar a trabalhar, ainda mais em casa.',
        comments: [
            { user: 'leon.kennedy', text: 'Bom demais mesmo. você merece. cuide bem da Emmily.' },
        ]
    },
]

const stories = [
    { nome: 'Vader', label: 'darth.vader', foto: darth },
    { nome: 'Palpatine', label: 'palpatine', foto: palpatine },
    { nome: 'Anakin', label: 'anakin_pod', foto: anakin },
    { nome: 'Frodo', label: 'frodo', foto: frodo },
    { nome: 'Gimli', label: 'gimli', foto: gimli },
    { nome: 'Peter P.', label: 'peter.p', foto: peter },
    { nome: 'Jim', label: 'jim', foto: jim },
    { nome: 'Dwight', label: 'dwight', foto: dwight },
    { nome: 'Michael', label: 'michael', foto: 'https://picsum.photos/seed/michael/200' },
]

export default function Principal() {
    return (
        <div className='Principal'>
            <div className='Stories'>
                {stories.map((s) => (
                    <div className='story' key={s.label}>
                        <div className='story_avatar'>
                            <img src={s.foto} alt={s.nome} />
                        </div>
                        <span>{s.label}</span>
                    </div>
                ))}
            </div>

            <div className='Feed'>
                {personagens.map((p) => (
                    <Post
                        key={p.username}
                        profileImage={p.profileImage}
                        username={p.username}
                        time={p.time}
                        postImage={p.postImage}
                        likes={p.likes}
                        caption={p.caption}
                        comments={p.comments}
                    />
                ))}
            </div>
        </div>
    );
}