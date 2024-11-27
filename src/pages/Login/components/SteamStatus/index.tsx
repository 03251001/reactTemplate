import React, {useEffect} from 'react';

function Index() {
    useEffect(() => {
        if (window.location.search) {
            const searchValue = window.location.search
            const all = searchValue?.split('&')

            if (!all?.find(f => f.includes('mod='))) {
                return
            }

            const mod = all?.find(f => f.includes('mod'))?.split('=')[1]

            const token = all?.find(f => f.includes('token'))?.split('=')[1]

            localStorage.setItem('message', JSON.stringify({
                status: mod === '1' ? 'success' : 'error',
                token: token || '',
                type: "loginSteam"
            }))

            window.close()
        }
    }, [window.location.search]);

    return <></>
}

export default Index;
