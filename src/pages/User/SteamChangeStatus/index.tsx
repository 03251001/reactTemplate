import React, {useEffect} from 'react';

enum SteamStatus {
    '当前绑定的SteamId与更换的SteamId一致！' = -1,
    '该SteamId已经被绑定！' = 1,
    '该steamId被vac封禁,无法绑定一致！',
    '设置公开资料！',
    '未知原因绑定失败！',
    '绑定成功！',
}

function Index() {

    useEffect(() => {
        if (window.location.search) {


            const searchValue = window.location.search

            const all = searchValue?.split('&')

            if (!all?.find(f => f.includes('mod='))) {
                return
            }

            const mod = all?.find(f => f.includes('mod'))?.split('=')[1]

            if (mod) {
                localStorage.setItem('message', JSON.stringify({
                    errorTip: SteamStatus[mod],
                    mod,
                    type: 'steamChange'
                }))
            }

            window.close()
        }
    }, [window.location.search]);

    return <></>
}

export default Index;