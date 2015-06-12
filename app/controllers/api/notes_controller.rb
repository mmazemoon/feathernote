module Api
  class  NotesController < ApiController
    def create
      @note = Note.new(note_params)
      if @note.save
        render json: @note
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @note = Note.find(params[:id])
      render json: @note
    end

    def update
      @note = Note.find(params[:id])
      if @note.update(note_params)
        render json: @note
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
    end

    def index
      @notes = current_user.notes
      render json: @notes
    end

    private

    def note_params
      params.require(:note).permit(:title, :body)
    end
  end
end
