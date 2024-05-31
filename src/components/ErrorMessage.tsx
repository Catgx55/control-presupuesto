import { PropsWithChildren } from "react"

// De esta manera se puede hacer importando ReactNode
//type ErrorMessageProps = {
//    children: ReactNode
//}

export default function ErrorMessage({children} : PropsWithChildren) {
    return (
        <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
            {children}
        </p>
    )
}