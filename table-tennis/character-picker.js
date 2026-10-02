(() => {
  const grid = document.getElementById('characters-grid');
  const validateButton = document.getElementById('validate-button');
  const selectionStatus = document.getElementById('selection-status');
  const emptyState = document.getElementById('empty-state');
  const errorState = document.getElementById('error-state');
  const errorMessage = document.getElementById('error-message');

  let selected = null;

  const selectCharacter = (character, card) => {
    document.querySelectorAll('.character-card.is-selected').forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-selected', 'false');
    });

    card.classList.add('is-selected');
    card.setAttribute('aria-selected', 'true');

    selected = character;
    validateButton.disabled = false;
    selectionStatus.textContent = `Selected: ${character.name}`;
  };

  const renderCharacters = (characters) => {
    grid.replaceChildren();

    if (characters.length === 0) {
      emptyState.classList.remove('hidden');
      errorState.classList.add('hidden');
      validateButton.disabled = true;
      selectionStatus.textContent = 'No character selected';
      return;
    }

    emptyState.classList.add('hidden');
    errorState.classList.add('hidden');

    characters.forEach((character, index) => {
      const card = document.createElement('button');

      card.type = 'button';
      card.className = 'character-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-selected', 'false');
      card.style.setProperty('--delay', `${Math.min(index * 35, 350)}ms`);

      const frame = document.createElement('span');
      frame.className = 'character-image-frame';

      const image = document.createElement('img');
      image.src = character.image;
      image.alt = character.name;
      image.loading = 'lazy';
      image.decoding = 'async';

      image.addEventListener('error', () => {
        image.alt = `${character.name} image unavailable`;
        frame.classList.add('image-error');
      });

      frame.appendChild(image);

      const caption = document.createElement('span');
      caption.className = 'character-name';
      caption.textContent = character.name;

      card.append(frame, caption);

      card.addEventListener('click', () => {
        selectCharacter(character, card);
      });

      grid.appendChild(card);
    });
  };

  const loadCharacters = async () => {
    try {
      const response = await fetch('./characters.json', {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`Unable to load characters.json (HTTP ${response.status})`);
      }

      const characters = await response.json();

      if (!Array.isArray(characters)) {
        throw new Error('characters.json must contain an array.');
      }

      const validCharacters = characters.filter((character) => {
        return (
          character &&
          typeof character === 'object' &&
          typeof character.name === 'string' &&
          character.name.trim() !== '' &&
          typeof character.image === 'string' &&
          character.image.trim() !== ''
        );
      });

      if (validCharacters.length !== characters.length) {
        console.warn(
          'Some entries in characters.json were ignored because they are missing a valid "name" or "image".'
        );
      }

      renderCharacters(validCharacters);
    } catch (error) {
      grid.replaceChildren();
      emptyState.classList.add('hidden');
      errorState.classList.remove('hidden');
      validateButton.disabled = true;

      errorMessage.textContent =
        `${error.message} Make sure characters.json is next to index.html and contains valid JSON.`;
    }
  };

  validateButton.addEventListener('click', () => {
    if (!selected) {
      return;
    }

    const target =
      `./app.html?name=${encodeURIComponent(selected.name)}`;

    window.location.assign(target);
  });

  loadCharacters();
})();