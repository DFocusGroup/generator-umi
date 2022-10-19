export const styles = [
  `
.spinner {
  position: fixed;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  top: 40%;
  left: 50%;
  margin-left: -22.5px;
  width: 45px;
  height: 45px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
];

export const scripts = [`
const splashDiv =  document.createElement('div');
splashDiv.classList.add('spinner');
document.body.appendChild(splashDiv);
`]