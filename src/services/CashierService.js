import Http from '../helpers/HttpHelper'
import { float, handleError, money, serialize } from '../helpers/MethodsHelper'

const CashierService = (() => {
    const _uris = {
        close: '/Caixas/FecharCaixa',
        open: '/Caixas/AbrirCaixa',
        list: '/Caixas/Listar',
        destroy: '/Caixas/',
        update: '/Caixas/',
        create: '/Caixas',
        show: '/Caixas/',
    }

    const list = async () => await handleError(async () => {
        const data = await Http.get(_uris.list)

        return JSON.parse(data).map(cashier => ({
            balance: money(cashier.Saldo),
            isOpen: cashier.Saldo > 0,
            name: cashier.Nome,
            id: cashier.Id,
        }))
    }, [])

    const create = async body => await handleError(async () => {
        await Http.post(_uris.create, { Nome: body.name })

        return true
    }, false)

    const show = async id => await handleError(async () => {
        const cashier = JSON.parse(
            await Http.get(_uris.show + id)
        )

        return {
            isOpen: cashier.Saldo > 0,
            balance: cashier.Saldo,
            name: cashier.Nome,
            id: cashier.Id,
        }
    }, {})

    const update = async (id, body) => await handleError(async () => {
        await Http.put(_uris.update + id, { Nome: body.name })

        return true
    }, false)

    const destroy = async id => await handleError(async () => {
        await Http.del(_uris.destroy + id)

        return true
    }, false)

    const open = async (id, { balance }) => await handleError(async () => {
        await Http.post(_uris.open + '?' + serialize({
            Valor: float(balance),
            Id: id,
        }))

        return true
    }, false)

    const close = async id => await handleError(async () => {
        await Http.post(_uris.close + '?' + serialize({ Id: id }))

        return true
    })

    return { list, create, show, update, destroy, open, close }
})()

export default CashierService
