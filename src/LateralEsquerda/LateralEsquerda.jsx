import ListItem from './ListItem'
import './LateralEsquerda.css'

import instagram from '../assets/logo-pequeno.jpg'

import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineHeart, AiOutlinePlusSquare, AiOutlineMessage } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo do Instagram' className='logoInstagram' />
            <ul>
                <ListItem icone={<AiOutlineHome size={26} />} texto="Início" />
                <ListItem icone={<AiOutlineSearch size={26} />} texto="Pesquisar" />
                <ListItem icone={<AiOutlineCompass size={26} />} texto="Explorar" />
                <ListItem icone={<BsCameraVideo size={26} />} texto="Reels" />
                <ListItem icone={<AiOutlineMessage size={26} />} texto="Mensagens" />
                <ListItem icone={<AiOutlineHeart size={26} />} texto="Notificações" />
                <ListItem icone={<AiOutlinePlusSquare size={26} />} texto="Criar" />
            </ul>

            <div className="perfil-lateral">
                <img src={instagram} alt="Perfil" />
                <div className="perfil-lateral-info">
                    <span>você</span>
                    <span>Seu perfil</span>
                </div>
            </div>
        </div>
    )
}
