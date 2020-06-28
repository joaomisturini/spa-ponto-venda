import Http from '../helpers/HttpHelper'
import { float, handleError, serialize } from '../helpers/MethodsHelper'

const CashierService = (() => {
    const _uris = {
        close: '/Caixas/FecharCaixa',
        withdraw: '/Caixas/Sangria',
        deposit: '/Caixas/Deposito',
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
            open: cashier.Saldo > 0,
            balance: cashier.Saldo,
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
            open: cashier.Saldo > 0,
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
    }, false)

    const deposit = async (id, { price }) => await handleError(async () => {
        await Http.post(_uris.deposit + '?' + serialize({
            Valor: float(price),
            Id: id,
        }))

        return true
    }, false)

    const withdraw = async (id, { price }) => await handleError(async () => {
        await Http.post(_uris.withdraw + '?' + serialize({
            Valor: float(price),
            Id: id,
        }))

        return true
    }, false)

    return {
        list, create, show, update, destroy, open, close, deposit, withdraw,
    }
})()

export default CashierService
