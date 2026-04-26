import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineSend, AiOutlineBook, AiFillBook } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

export default function Post(props) {
    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(props.comments || []);

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    };

    const handleComment = () => {
        if (commentText.trim()) {
            setComments([...comments, { user: 'você', text: commentText }]);
            setCommentText('');
        }
    };

    return (
        <div className="Post">
            {/* Header */}
            <div className="post_header">
                <div className="post_header_user">
                    <div className="post_avatar_ring">
                        <img src={props.profileImage} alt={props.username} />
                    </div>
                    <div className="post_header_info">
                        <span className="post_username">{props.username}</span>
                        <span className="post_time">{props.time}</span>
                    </div>
                </div>
                <button className="post_more"><BsThreeDots size={20} /></button>
            </div>

            {/* Imagem */}
            <div className="post_image">
                <img src={props.postImage} alt="Post" onDoubleClick={handleLike} />
            </div>

            {/* Ações */}
            <div className="post_actions">
                <div className="post_actions_left">
                    <button onClick={handleLike} className={liked ? 'liked' : ''}>
                        {liked ? <AiFillHeart size={26} color="#ed4956" /> : <AiOutlineHeart size={26} />}
                    </button>
                    <button onClick={() => setShowComment(!showComment)}>
                        <AiOutlineComment size={26} />
                    </button>
                    <button>
                        <AiOutlineSend size={24} />
                    </button>
                </div>
                <button onClick={() => setSaved(!saved)}>
                    {saved ? <AiFillBook size={24} /> : <AiOutlineBook size={24} />}
                </button>
            </div>

            {/* Likes */}
            <div className="post_likes">
                <span><strong>{likes.toLocaleString('pt-BR')} curtidas</strong></span>
            </div>

            {/* Caption */}
            <div className="post_caption">
                <span><strong>{props.username}</strong> {props.caption}</span>
            </div>

            {/* Comentários */}
            {comments.length > 0 && (
                <div className="post_comments">
                    {comments.map((c, i) => (
                        <div key={i} className="post_comment">
                            <span><strong>{c.user}</strong> {c.text}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Input de comentário */}
            {showComment && (
                <div className="post_comment_input">
                    <input
                        type="text"
                        placeholder="Adicione um comentário..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleComment()}
                    />
                    <button onClick={handleComment} disabled={!commentText.trim()}>Publicar</button>
                </div>
            )}
        </div>
    );
}
