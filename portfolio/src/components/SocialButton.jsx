export default function SocialButton({children}) {
    return<button className={ "bg-white/10 border border-white/10 text-gray-900 rounded-full p-1 hover:bg-white/20 hover:border-white/20 cursor-pointer"}>
        {children}
    </button>
}