const base_url = "https://test-stage.barat.credit/ipg/v1.1"

export const getIPGData = (ipg_token, setIPGData, setStepStatus, secret_token, secret_token_setter) => {
    var server_response = null;

    try {
        fetch(base_url + '/payment/' + ipg_token + '/ipg/', {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ secret_token: secret_token })
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 400) {
                throw Error('خطا در اطلاعات ارسالی به درگاه');
            }
        }).then(data => {
            setIPGData(data);
            if (data.timedout === true) {
            }
        }).catch(err => {
            setStepStatus('error');
        });
    } catch (err) {
        setStepStatus('error');
    }
    return { server_response };
};

export default getIPGData;