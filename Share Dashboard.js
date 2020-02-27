function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
}
async function shareDashboard () { 
    $('.js-menuShareDashboard>a').click(); 
    await sleep(3000); $('.sb-moveAll')[0].click(); 
    $('.js-reportingDetailViewButtons .primaryBtn').click(); 
    $('.js-menuLoadReport a').click(); 
    await sleep(1000); 
    $('.reportName').click(); 
}
shareDashboard(); 