import './LateralDireita.css'

const avatar = (nome) => `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=random&size=200&font-size=0.4&rounded=true`

const sugestoes = [
    { username: 'luke.skywalker', sub: 'Seguido por leia' },
    { username: 'leon.kennedy', sub: 'Seguido por grace' },
    { username: 'emmily', sub: 'Seguido por grace' },
    { username: 'obiwan.kenoby', sub: 'Sugerido para você' },
    { username: 'michael.g.scott', sub: 'Seguido por jim.halpert' },
]

export default function LateralDireita() {
    return (
        <div className='LateralDireita'>
            {}
            <div className='conta_usuario'>
                <img src={avatar('Você')} alt='Sua conta' />
                <div className='conta_info'>
                    <span className='conta_username'>você</span>
                    <span className='conta_nome'>Meu perfil</span>
                </div>
                <button className='btn_trocar'>Trocar</button>
            </div>

            {}
            <div className='sugestoes_header'>
                <span>Sugestões para você</span>
                <button>Ver tudo</button>
            </div>

            {sugestoes.map((s) => (
                <div className='sugestao_item' key={s.username}>
                    <img src={avatar(s.username)} alt={s.username} />
                    <div className='sugestao_info'>
                        <span className='sugestao_username'>{s.username}</span>
                        <span className='sugestao_sub'>{s.sub}</span>
                    </div>
                    <button className='btn_seguir'>Seguir</button>
                </div>
            ))}

            <div className='footer_links'>
                <span>Sobre · Ajuda · Imprensa · API · Privacidade · Termos</span>
                <span>© 2024 INSTAGRAO</span>
            </div>
        </div>
    );
}
