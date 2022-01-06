'use strict';

let deferredInstallPrompt = null;
const installButtom = document.getElementById('butInstall');
installButtom.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
	deferredInstallPrompt = evt;
	installButtom.remomeAttribute('hidden');
}

function installPWA(evt){
	deferredInstallPrompt.prompt();
	evt.srcElement.setAttribute('hidden', true);
	deferredInstallPrompt.eserChoice.then((choice)=>{
		if(choice.outcome === "accepted"){
			console.log("aceptado")
		} else {
			console.log("No aceptado")
		}
		deferredInstallPrompt = null;
	})
}


window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
	console.log("Pelis instalada app");
}